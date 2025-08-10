"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Lightbulb, Target, Users, Code, TrendingUp, Award } from "lucide-react"
import Link from "next/link"

export default function LearningSummaryPage() {
  return (
    <div className="min-h-screen bg-[#0C0E1A] text-white">
      {/* 导航栏 */}
      <nav className="border-b border-[#00FFD0]/20 bg-[#0C0E1A]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-[#00FFD0] hover:text-[#00FFD0]/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>返回首页</span>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#00FFD0]" />
              <span className="text-lg font-semibold">学习总结分享</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-[#00FFD0] text-[#00FFD0]">
            <BookOpen className="w-4 h-4 mr-2" />
            AI产品经理培训营
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00FFD0] to-[#00B8FF] bg-clip-text text-transparent">
            AI产品经理成长记
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            从0到1的进阶之路 - 作为一名对AI领域充满好奇的初学者，25年暑假参加了一个AI产品经理的培训营。
            这几天的学习，不仅让我对AI产品经理这个岗位有了更深入的理解，也颠覆了我之前的一些固有认知。
          </p>
        </motion.div>

        {/* 课程概览 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <Target className="w-5 h-5" />
                课程概览
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-[#0C0E1A]/50">
                  <div className="w-12 h-12 bg-[#00FFD0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-[#00FFD0]" />
                  </div>
                  <h3 className="font-semibold mb-2">第一课</h3>
                  <p className="text-sm text-gray-400">认知升级 - AI产品经理的认知</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#0C0E1A]/50">
                  <div className="w-12 h-12 bg-[#00FFD0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-[#00FFD0]" />
                  </div>
                  <h3 className="font-semibold mb-2">第二课</h3>
                  <p className="text-sm text-gray-400">方法论拆解 - 从0到1打造AI产品</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#0C0E1A]/50">
                  <div className="w-12 h-12 bg-[#00FFD0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-[#00FFD0]" />
                  </div>
                  <h3 className="font-semibold mb-2">第三课</h3>
                  <p className="text-sm text-gray-400">Agent与提示词工程</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 第一课：认知升级 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <Lightbulb className="w-5 h-5" />
                第一课：认知升级——AI产品经理的认知
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                在课程开始前，我以为AI产品经理和传统产品经理最大的区别就是懂技术。但第一课就让我明白了，
                技术只是工具，更重要的是对AI产品思维的深刻理解。
              </p>
              
              <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#00FFD0] mb-3">核心认知</h4>
                <p className="text-gray-300 mb-4">
                  老师反复强调，AI产品经理的核心是<strong className="text-[#00FFD0]">解决业务问题</strong>，
                  我们需要对项目背景和业务场景有足够的熟悉度，才能"do the right thing"——做正确的事。
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">向上管理，克服困难：</strong>
                      <span className="text-gray-300">领导信任度要达到60%，这让我意识到，沟通和影响力的重要性。</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">独立思考，主动寻求帮助：</strong>
                      <span className="text-gray-300">在面对问题时，不能被动等待，要主动拆解和解决。</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">迭代和成本意识：</strong>
                      <span className="text-gray-300">学习中我明白了，AI产品的迭代过程和传统产品有所不同，而且要时刻考虑到Token等成本问题。</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 第二课：方法论拆解 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <Code className="w-5 h-5" />
                第二课：方法论拆解——如何从0到1地打造AI产品
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                这一部分是课程的精华，老师从需求分析、方案设计到交付落地，系统地拆解了AI产品的全生命周期。
              </p>

              <div className="space-y-6">
                {/* 需求分析 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">1. 需求分析：发现并拆解问题</h4>
                  <p className="text-gray-300 mb-3">
                    这一阶段的核心是发现并理解用户真正的痛点。我的笔记里记录了"用户故事"这个概念：从用户视角来完成一条需求。
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• 写出详细的需求文档和会议记录，确保所有细节都清晰无误</div>
                    <div>• 学会组织评审流程，用严谨的流程来确保需求的合理性</div>
                  </div>
                </div>

                {/* 方案设计 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">2. 方案设计：用"创新思维"解决问题</h4>
                  <p className="text-gray-300 mb-3">
                    如何把需求转化为可落地的方案？课程中提到了几个非常实用的工具：
                  </p>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-white">How-Might-We (HMW)：</strong>
                      <span className="text-gray-300">这是一个把问题转化为机会的提问方式。</span>
                    </div>
                    <div>
                      <strong className="text-white">Mad-Right：</strong>
                      <span className="text-gray-300">一个可以激发大家疯狂想象力的工具，鼓励我们跳出常规思维。</span>
                    </div>
                    <div>
                      <strong className="text-white">We-I：</strong>
                      <span className="text-gray-300">一种集体共创的思维方式，鼓励团队成员一起思考。</span>
                    </div>
                  </div>
                </div>

                {/* 交付落地 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">3. 交付落地：让产品真正产生价值</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-white">Inception（从一到十做出来的过程）：</strong>
                      <span className="text-gray-300">需要提前规划好未来的需求，拆解详细，并和业务方沟通。</span>
                    </div>
                    <div>
                      <strong className="text-white">Delivery&Evolution（往外推，让更多人去使用）：</strong>
                      <span className="text-gray-300">持续优化和推广，让产品被更多人使用，产生真正的业务价值。</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 第三课：Agent与提示词工程 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <Users className="w-5 h-5" />
                第三课：Agent与提示词工程——AI产品经理的"秘密武器"
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                课程中我最感兴趣的部分是关于AI Agent和Prompt（提示词）工程。Agent能力被总结为思考能力、规划能力、反思能力。
                AI产品经理需要具备分析能力和敏锐度，能够分析现有软件的优缺点，并善于利用AI工具来提升效率。
              </p>
              
              <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#00FFD0] mb-3">核心要点</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">Agent三大能力：</strong>
                      <span className="text-gray-300">思考能力、规划能力、反思能力</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">AI产品经理要求：</strong>
                      <span className="text-gray-300">分析能力和敏锐度，能够分析现有软件的优缺点</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00FFD0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">提示词工程：</strong>
                      <span className="text-gray-300">通过精心设计的Prompt来引导AI模型生成我们想要的结果</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 实践篇 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <TrendingUp className="w-5 h-5" />
                实践篇：非计算机学生的破局之路
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                作为一名非计算机专业的学生，实践环节对我来说充满挑战。许多在专业学生看来理所当然的操作，
                对我而言都是从零开始的探索。但正是在这种"磕磕绊绊"中，我才对AI产品经理的工作有了更深刻的理解。
              </p>

              <div className="space-y-6">
                {/* 部署V0 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">部署V0：从手足无措到豁然开朗</h4>
                  <p className="text-gray-300">
                    当我第一次看到那些部署命令和代码时，完全是手足无措的。我不知道每个命令是干什么的，
                    也不知道为什么会报错。但我没有放弃，而是硬着头皮，逐字逐句地去查阅资料，问AI，
                    理解每一个步骤的意义。最终，当网页成功部署的那一刻，我不仅感受到了巨大的成就感，
                    更重要的是，我明白了AI产品从一个想法到能被用户使用的完整技术链路。
                  </p>
                </div>

                {/* 个人配置 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">个人配置：搭建我的"专属工具箱"</h4>
                  <p className="text-gray-300">
                    这看似简单，但对我来说是搭建起"AI产品经理工具箱"的第一步。我学会了配置开发环境，
                    安装必要的插件和软件，这就像一个厨师在整理自己的刀具和配料。虽然过程繁琐，
                    但它让我为后续更复杂的实践打下了坚实的基础。
                  </p>
                </div>

                {/* 实战项目 */}
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">实战项目：用AI思维打造'FutureU'</h4>
                  <p className="text-gray-300 mb-4">
                    最令我兴奋的，是和团队一起头脑风暴并落地一个AI产品项目——FutureU。
                    这个过程是整个课程理论的缩影，让我们真正体验了一回产品经理的"从0到1"。
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <strong className="text-white">用户定位：</strong>
                      <span className="text-gray-300">想要转行AI产品经理的非技术应届毕业生</span>
                    </div>
                    <div>
                      <strong className="text-white">核心痛点：</strong>
                      <span className="text-gray-300">岗位的"黑箱"、经验"翻译"的鸿沟</span>
                    </div>
                    <div>
                      <strong className="text-white">核心价值：</strong>
                      <span className="text-gray-300">经验编译器、机会雷达</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 总结与反思 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-12"
        >
          <Card className="bg-[#1A1D2A] border-[#00FFD0]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00FFD0]">
                <Award className="w-5 h-5" />
                总结与反思：我对产品经理的全新认知
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                通过这次培训和实践，我对"产品经理"这个角色有了更深刻、更全面的认知。
                它不仅仅是一个岗位，更是一种思考问题和解决问题的方式。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">核心能力</h4>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-white">用户同理心：</strong>
                      <span className="text-gray-300 text-sm">抛开自己的主观想法，真正站在用户的角度去思考</span>
                    </div>
                    <div>
                      <strong className="text-white">业务洞察力：</strong>
                      <span className="text-gray-300 text-sm">对所处的行业和业务有深刻的理解</span>
                    </div>
                    <div>
                      <strong className="text-white">系统性思维：</strong>
                      <span className="text-gray-300 text-sm">将复杂项目拆解成可执行的模块</span>
                    </div>
                    <div>
                      <strong className="text-white">沟通与协作：</strong>
                      <span className="text-gray-300 text-sm">用清晰、有说服力的方式与团队沟通</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0C0E1A]/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-[#00FFD0] mb-3">未来展望</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    正如老师所说，"我们不会被AI淘汰，但会被更会用AI工具的产品经理淘汰。"
                    这句话让我印象深刻，也成为了我未来学习和职业发展的指引。
                  </p>
                  <p className="text-gray-300 text-sm">
                    这次培训只是一个开始，它为我打开了一扇通往AI产品世界的大门。
                    从现在开始，我将带着这些宝贵的经验和认知，努力将学到的知识应用到实践中，
                    不断提升自己，成为一个真正的AI产品经理。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 返回按钮 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center"
        >
          <Link href="/">
            <Button className="bg-[#00FFD0] hover:bg-[#00FFD0]/80 text-black font-semibold px-8 py-3">
              返回首页
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
