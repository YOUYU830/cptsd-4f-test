import { useState } from 'react';
import { questions, calculateResults } from '../data/questionnaire';
import type { ResponseType } from '../data/questionnaire';

interface QuestionnairePageProps {
  onComplete: (scores: Record<ResponseType, number>) => void;
}

const options = [
  { value: 1, label: '完全不符合' },
  { value: 2, label: '不太符合' },
  { value: 3, label: '中等符合' },
  { value: 4, label: '比较符合' },
  { value: 5, label: '完全符合' }
];

export function QuestionnairePage({ onComplete }: QuestionnairePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(0));

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const currentAnswer = answers[currentIndex];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    } else {
      const scores = calculateResults(newAnswers);
      onComplete(scores);
    }
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="flex-1 flex flex-col px-6 py-10 max-w-2xl mx-auto w-full">
      {/* 进度区域 */}
      <div className="mb-10">
        {/* 进度文字 */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-[var(--text-h)]">
            第 {currentIndex + 1} / {questions.length} 题
          </span>
          <span className="text-sm text-[var(--text)]">{Math.round(progress)}%</span>
        </div>
        {/* 进度条 */}
        <div className="h-3 bg-[var(--code-bg)] rounded-full overflow-hidden border border-[var(--border)]">
          <div
            className="h-full bg-gradient-to-r from-[var(--accent)] to-purple-400 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 问题区域 */}
      <div className="flex-1">
        <div className="bg-[var(--code-bg)] rounded-2xl p-8 mb-10 border border-[var(--border)]">
          <h2 className="text-xl md:text-2xl font-medium text-[var(--text-h)] leading-loose text-left">
            {currentQuestion.text}
          </h2>
        </div>

        {/* 选项区域 */}
        <div className="space-y-4 mb-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all text-base flex items-center justify-between
                         ${currentAnswer === option.value
                   ? 'border-[var(--accent)] bg-[var(--accent-bg)]'
                   : 'border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg)]'
                 }`}
            >
              <span className={currentAnswer === option.value ? 'text-[var(--text-h)] font-medium' : ''}>
                {option.label}
              </span>
              <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs
                              ${currentAnswer === option.value
                    ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                    : 'border-[var(--border)]'
                  }`}>
                {option.value}
              </span>
            </button>
          ))}
        </div>

        {/* 当前选择显示 */}
        {currentAnswer > 0 && (
          <p className="text-sm text-[var(--text)] text-center">
            当前选择：<span className="font-medium text-[var(--accent)]">{options[currentAnswer - 1].label}</span>
          </p>
        )}
      </div>

      {/* 导航 dots */}
      <div className="mt-8 flex flex-wrap justify-center gap-1.5">
        {questions.map((q, idx) => (
          <button
            key={q.id}
            onClick={() => goToQuestion(idx)}
            className={`w-2 h-2 rounded-full transition-all
                       ${idx === currentIndex
                 ? 'bg-[var(--accent)] w-6'
                 : answers[idx] > 0
                   ? 'bg-[var(--accent-border)]'
                   : 'bg-[var(--border)]'
               }`}
          />
        ))}
      </div>

      {/* 上一题/下一题按钮 */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => goToQuestion(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            currentIndex === 0
              ? 'text-[var(--text)] opacity-30 cursor-not-allowed'
              : 'text-[var(--text-h)] bg-[var(--code-bg)] border border-[var(--border)] hover:border-[var(--accent)]'
          }`}
        >
          上一题
        </button>
        <button
          onClick={() => {
            if (currentAnswer === 0) {
              // 如果没选答案，提示用户
              return;
            }
            if (currentIndex < questions.length - 1) {
              goToQuestion(currentIndex + 1);
            } else {
              const scores = calculateResults(answers);
              onComplete(scores);
            }
          }}
          disabled={currentIndex === questions.length - 1 && currentAnswer === 0}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            currentAnswer === 0
              ? 'text-[var(--text)] opacity-50 cursor-not-allowed bg-[var(--code-bg)] border border-[var(--border)]'
              : 'text-[var(--text-h)] bg-[var(--code-bg)] border border-[var(--border)] hover:border-[var(--accent)]'
          }`}
        >
          {currentIndex === questions.length - 1 ? '查看结果' : '下一题'}
        </button>
      </div>
    </div>
  );
}