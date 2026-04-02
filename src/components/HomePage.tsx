import { typeInfo } from '../data/questionnaire';

interface HomePageProps {
  onStart: () => void;
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="flex-1 flex flex-col px-6 py-12 max-w-3xl mx-auto w-full">
      {/* 主标题 - 居中 */}
      <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-h)] mb-12 text-center">
        CPTSD-4F 反应
        <br />
        自我评估
      </h1>

      {/* 作者介绍卡片 */}
      <div className="bg-[var(--code-bg)] rounded-2xl p-6 mb-12 border border-[var(--border)]">
        <p className="text-sm text-[var(--text)] leading-relaxed text-left">
          你好，我是爱宝，很高兴和你在此相遇。
          原生家庭是我们每个人有关爱、安全与自我价值的底层操作系统，它深深影响着我们做出的每个决定、每个反应，影响着我们会爱什么样的人，进入什么样的生活。如果我们在有毒的家庭环境里长大，通过这份评估看清自己的创伤反应属于哪一种类型，或许能为自我复原找到更清晰、更有针对性的方向。
        </p>
      </div>

      {/* 4F 类型卡片 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {typeInfo.map((type) => (
          <div
            key={type.id}
            className="p-5 bg-gradient-to-br from-[var(--code-bg)] to-[var(--bg)] rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <h3 className="font-medium text-[var(--text-h)] text-lg mb-2">
              {type.chineseName}
            </h3>
            <p className="text-xs text-[var(--text)]">{type.name}</p>
            <p className="text-xs text-[var(--text)] mt-2 leading-relaxed text-left">
              {type.mechanism}
            </p>
          </div>
        ))}
      </div>

      {/* 按钮区域 - 居中 */}
      <div className="text-center">
        <button
          onClick={onStart}
          className="px-10 py-5 bg-[var(--accent)] text-white rounded-xl font-medium
                     hover:opacity-90 transition-opacity text-lg shadow-lg hover:shadow-xl
                     active:scale-95 transform"
        >
          开始测评
        </button>

        <p className="text-sm text-[var(--text)] mt-12 mb-6">
          共 28 道题，预计需要 5-8 分钟
        </p>

        {/* 免责声明 */}
        <div className="mt-8 max-w-md mx-auto text-left">
          <p className="text-xs text-[var(--text)] leading-relaxed">
            本测试仅供个人探索，不作为诊断依据，如需专业帮助，请咨询心理健康专业人士。
          </p>
        </div>
      </div>
    </div>
  );
}