import { useMemo, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { typeInfo, getMixedTypes, interpretationTexts, getDominantPattern, calculateAverages } from '../data/questionnaire';
import type { ResponseType } from '../data/questionnaire';

interface ResultPageProps {
  scores: Record<ResponseType, number>;
  onRestart: () => void;
}

export function ResultPage({ scores, onRestart }: ResultPageProps) {
  const [copied, setCopied] = useState(false);
  const mixedTypes = useMemo(() => getMixedTypes(scores), [scores]);
  const dominantPattern = useMemo(() => getDominantPattern(scores), [scores]);

  // 计算各维度平均分
  const averages = useMemo(() => calculateAverages(scores), [scores]);

  // 预设的精准混合型组合
  const preciseMixedTypes = ['fight-fawn', 'flight-freeze', 'fight-freeze'];

  // 28题，每题5分，最高35分
  const maxScore = 35;

  // 雷达图数据
  const radarData = useMemo(() => {
    return typeInfo.map(t => ({
      type: t.chineseName,
      score: scores[t.id],
      percentage: Math.round((scores[t.id] / maxScore) * 100)
    }));
  }, [scores]);

  // 混合类型详情
  const mixedTypeDetails = useMemo(() => {
    return mixedTypes.map(t => typeInfo.find(type => type.id === t)).filter(Boolean);
  }, [mixedTypes]);

  // 获取解读文案 - 使用 dominantPattern 的逻辑
  const interpretationText = useMemo(() => {
    const desc = dominantPattern.description;

    // 如果是均衡型或尚不明确
    if (desc.includes('均衡') || desc.includes('尚不明确')) {
      return interpretationTexts.balanced;
    }

    // 如果是混合型
    if (desc.includes('，同时')) {
      // 提取模式名称
      const match = desc.match(/你的核心模式是：(.+?)和(.+?)也很突出/);
      if (match) {
        const typeA = match[1];
        const typeB = match[2];
        // 转换为英文key
        const typeKeyMap: Record<string, string> = {
          '战反应': 'fight',
          '逃反应': 'flight',
          '僵反应': 'freeze',
          '讨好反应': 'fawn'
        };
        const keyA = typeKeyMap[typeA];
        const keyB = typeKeyMap[typeB];

        if (keyA && keyB) {
          const key = `${keyA}-${keyB}`;

          // 先检查是否为预设的精准组合
          if (preciseMixedTypes.includes(key)) {
            return interpretationTexts[key as keyof typeof interpretationTexts];
          }

          // 如果不是预设组合，调用通用模板
          const genericKey = `${keyA}-${keyB}` as keyof typeof interpretationTexts;
          if (interpretationTexts[genericKey]) {
            return interpretationTexts[genericKey];
          }

          // 如果没有对应文案，使用通用混合模板
          return `你的核心模式是：${typeA}和${typeB}的混合。
这意味着你在面对压力时，会在这两种反应模式之间切换。这并不奇怪，大多数人都不是单一的反应类型，而是根据情境、关系、以及自己当下的能量状态，选择不同的生存策略。
这两种反应可能看起来有些矛盾，但它们背后都有一个共同的目标：保护你。无论是用攻击、逃避、冻结还是讨好，都是你曾经在艰难环境中学会的生存智慧。
给你提供一个可以尝试的方向： 试着记录一下：在什么情况下你会启动哪种反应？它们分别帮助你避开了什么？当你能够看清这些模式背后的恐惧时，你就有了主动权，你即可以选择用旧模式保护自己，也可以尝试新的方式。
如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。`;
        }
      }
    }

    // 如果是单一主导模式
    if (desc.includes('你的主导模式是：')) {
      const match = desc.match(/你的主导模式是：(.+)/);
      if (match) {
        const typeName = match[1];
        const typeKeyMap: Record<string, string> = {
          '战反应': 'fight',
          '逃反应': 'flight',
          '僵反应': 'freeze',
          '讨好反应': 'fawn'
        };
        const key = typeKeyMap[typeName];
        if (key && interpretationTexts[key]) {
          return interpretationTexts[key];
        }
      }
    }

    return interpretationTexts.balanced;
  }, [dominantPattern, averages]);

  // 加粗特定句子的函数
  const formatInterpretationText = (text: string) => {
    let result = text;

    // 先将文本按换行分割成段落，用p标签包裹并添加间距
    const paragraphs = result.split(/\n\n+/);
    result = paragraphs.map(p => {
      let pContent = p.trim();
      if (!pContent) return '';

      // 加粗 "你的主导模式是：XXX"
      pContent = pContent.replace(
        /(你的主导模式是：.+?)(?:\n|$)/g,
        '<strong>$1</strong>'
      );

      // 加粗 "你的核心模式是：XXX"
      pContent = pContent.replace(
        /(你的核心模式是：.+?)(?:\n|$)/g,
        '<strong>$1</strong>'
      );

      // 加粗 "给你提供一个可以尝试的方向："
      pContent = pContent.replace(
        /(给你提供一个可以尝试的方向：)/g,
        '<strong>$1</strong>'
      );

      // 加粗 "如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。"
      pContent = pContent.replace(
        /(如果你愿意，可以关注我的小红书或者抖音，我会定期分享有关原生家庭的内容。)/g,
        '<strong>$1</strong>'
      );

      return `<p style="margin-bottom: 1em;">${pContent}</p>`;
    }).join('');

    return result;
  };

  // 判断是否为均衡型
  const isBalanced = useMemo(() => {
    const desc = dominantPattern.description;
    return desc.includes('均衡') || desc.includes('尚不明确');
  }, [dominantPattern]);

  // 获取主要类型用于显示
  const primaryType = useMemo(() => {
    const typeName = dominantPattern.mainType;
    if (typeName.includes('和')) {
      return mixedTypes[0] || 'fight';
    }
    const typeKeyMap: Record<string, string> = {
      '战反应': 'fight',
      '逃反应': 'flight',
      '僵反应': 'freeze',
      '讨好反应': 'fawn'
    };
    return (typeKeyMap[typeName] || 'fight') as ResponseType;
  }, [dominantPattern, mixedTypes]);

  // 获取类型详情
  const typeDetails = useMemo(() => {
    return typeInfo.find(t => t.id === primaryType);
  }, [primaryType]);

  // 格式化后的解读文案
  const formattedInterpretationText = useMemo(() => {
    return formatInterpretationText(interpretationText);
  }, [interpretationText]);

  return (
    <div className="flex-1 flex flex-col px-6 py-10 max-w-2xl mx-auto w-full overflow-auto">
      {/* 大标题 */}
      <h1 className="text-2xl md:text-3xl font-medium text-[var(--text-h)] mb-10 text-center">
        你的创伤反应报告
      </h1>

      {/* 主要类型卡片 */}
      <div className="p-10 bg-gradient-to-br from-[var(--accent-bg)] to-[var(--bg)] border-2 border-[var(--accent)] rounded-2xl mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--text-h)] mb-4">
            {dominantPattern.description}
          </h2>
          {!dominantPattern.description.includes('均衡') && !dominantPattern.description.includes('尚不明确') && (
            <>
              <p className="text-lg text-[var(--text)] mb-4">
                {typeDetails?.description}
              </p>
              <p className="text-sm text-[var(--text)] italic px-4">
                {typeDetails?.mechanism}
              </p>
            </>
          )}
        </div>
      </div>

      {/* 混合类型提示 */}
      {mixedTypes.length > 1 && !isBalanced && (
        <div className="p-5 bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 dark:border-amber-700 rounded-xl mb-10">
          <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-3 text-center">
            混合类型检测
          </h3>
          <p className="text-sm text-amber-700 dark:text-amber-300 text-center mb-4">
            你的得分显示可能同时具有以下两种类型特征：
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {mixedTypeDetails.map((detail) => detail && (
              <span
                key={detail.id}
                className="px-4 py-2 bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 rounded-lg font-medium"
              >
                {detail.chineseName}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 雷达图 */}
      <h3 className="text-xl font-medium text-[var(--text-h)] mb-6 text-center">得分分布</h3>
      <div className="w-full h-[300px] mb-10">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis
              dataKey="type"
              tick={{ fill: 'var(--text)', fontSize: 13 }}
            />
            <Radar
              name="得分"
              dataKey="score"
              stroke="var(--accent)"
              fill="var(--accent)"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* 得分条（百分比） */}
      <div className="space-y-5 mb-10">
        {typeInfo.map((type) => {
          const percentage = Math.round((scores[type.id] / maxScore) * 100);
          const isPrimary = type.id === primaryType;
          return (
            <div key={type.id} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className={`font-medium ${isPrimary ? 'text-[var(--accent)]' : 'text-[var(--text-h)]'}`}>
                  {type.chineseName}
                </span>
                <span className="text-[var(--text)]">{scores[type.id]}分 ({percentage}%)</span>
              </div>
              <div className="h-4 bg-[var(--code-bg)] rounded-full overflow-hidden border border-[var(--border)]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isPrimary && !isBalanced
                      ? 'bg-gradient-to-r from-[var(--accent)] to-purple-400'
                      : 'bg-[var(--border)]'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* 详细解读 */}
      <h3 className="text-xl font-medium text-[var(--text-h)] mb-6">深度解读</h3>
      <div className="bg-[var(--code-bg)] rounded-xl p-8 mb-10 border border-[var(--border)]">
        <div
          className="text-sm text-[var(--text)] text-justify text-left mx-auto"
          style={{ maxWidth: '90ch', lineHeight: '1.6' }}
          dangerouslySetInnerHTML={{ __html: formattedInterpretationText }}
        />
      </div>

      {/* 关注小红书/抖音 */}
      <div className="bg-[var(--code-bg)] rounded-xl p-8 mb-8 border border-[var(--border)]">
        <p className="text-sm text-[var(--text)] leading-relaxed text-left mb-8">
          如果你想进一步了解原生家庭的自我复原和CPTSD，可以关注我的小红书、抖音（@爱宝的心事局），我会持续分享我的日常观察和复原经验。
        </p>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src="/小红书.jpg" alt="小红书" className="w-28 h-28 object-contain rounded-lg border border-[var(--border)]" />
            <span className="text-xs text-[var(--text)] mt-3">小红书</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/抖音.jpg" alt="抖音" className="w-28 h-28 object-contain rounded-lg border border-[var(--border)]" />
            <span className="text-xs text-[var(--text)] mt-3">抖音</span>
          </div>
        </div>
      </div>

      {/* 添加微信获取论文 */}
      <div className="bg-[var(--code-bg)] rounded-xl p-8 mb-10 border border-[var(--border)]">
        <p className="text-sm text-[var(--text)] leading-relaxed text-left mb-6">
          国内对CPTSD的研究刚刚起步，在过去三年，中国学者开始用国际标准工具研究这个议题，包括但不限于有关留守儿童的研究、全国范围的流行病学调查等。我整理了这些研究的关键发现，如果你感兴趣，可以添加我的个人微信，备注你的测试结果类型，获得一份《CPTSD国际前沿论文合集》。
        </p>
        <div className="flex flex-col items-center">
          <p className="text-sm text-[var(--text-h)] font-medium mb-4">微信号：wygshstnh</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText('wygshstnh');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            {copied ? '已复制' : '复制微信号'}
          </button>
        </div>
      </div>

      {/* 免责声明 */}
      <div className="p-6 bg-[var(--code-bg)] rounded-xl mb-10 border border-[var(--border)]">
        <p className="text-xs text-[var(--text)] text-center leading-relaxed">
          本测试仅供个人探索，不作为诊断依据，如需专业帮助，请咨询心理健康专业人士。
        </p>
      </div>

      {/* 重新测试按钮 */}
      <button
        onClick={onRestart}
        className="px-8 py-4 bg-[var(--accent)] text-white rounded-xl font-medium
                   hover:opacity-90 transition-opacity text-lg shadow-lg"
      >
        重新测试
      </button>
    </div>
  );
}