export type RoadmapItem = {
  id: string;
  label: string;
  legacyIds?: string[];
};

export type RoadmapPart = {
  id: string;
  title: string;
  items: RoadmapItem[];
};

const makeItems = (part: number, labels: string[]): RoadmapItem[] =>
  labels.map((label, index) => ({
    id: `part-${part}-item-${index + 1}`,
    label,
  }));

// Kept as an ID manifest for one-time migration from the original v1 checklist.
const legacyRoadmap: RoadmapPart[] = [
  {
    id: "part-1",
    title: "PyTorch 与神经网络基础",
    items: makeItems(1, [
      "Lesson 1 · Tensor、Shape、Batch、Linear",
      "Lesson 2 · Forward、Loss、Gradient、Backward",
      "Lesson 3 · Activation 与 MLP",
      "Lesson 4 · Computational Graph 与 Autograd",
      "Lesson 5 · Optimizer 与 Parameter Update",
      "Lesson 6 · Train / Validation",
      "Project · Tiny Neural Controller（输入 [position, velocity, target]，输出 control action）",
    ]),
  },
  {
    id: "part-2",
    title: "机器人控制基础",
    items: makeItems(2, [
      "q / qdot / q_des / torque",
      "PD Controller",
      "Kp 对控制效果的影响",
      "Kd 与振荡抑制",
      "q_des 与真实 q 的区别",
      "Torque 如何改变机器人状态",
      "Control Frequency 与 Physics Frequency",
      "Joint Limits",
      "Experiment · 绘制 q(t)、qdot(t)、q_des(t)、torque(t)",
    ]),
  },
  {
    id: "part-3",
    title: "Gymnasium 与 RL Environment",
    items: makeItems(3, [
      "reset()",
      "step()",
      "observation",
      "action",
      "reward",
      "terminated 与 truncated",
      "episode",
      "Project · 自己实现一个 Mini Gymnasium Environment",
      "Case Study · 18 ms / 31 ms Episode 与错误 Termination",
    ]),
  },
  {
    id: "part-4",
    title: "强化学习基础",
    items: makeItems(4, [
      "State / Action / Reward",
      "Trajectory",
      "Return",
      "Discount Factor",
      "Policy",
      "Random Policy Experiment",
      "Policy Gradient 基本思想",
      "REINFORCE",
      "Project · collect trajectory",
      "Project · compute return",
      "Project · policy loss",
      "Project · backward + optimizer step",
    ]),
  },
  {
    id: "part-5",
    title: "Actor-Critic",
    items: makeItems(5, [
      "Actor",
      "Critic",
      "V(s)",
      "Return 与 Value",
      "Advantage",
      "Bootstrap",
      "为什么 Policy Gradient 不稳定",
      "GAE",
    ]),
  },
  {
    id: "part-6",
    title: "PPO",
    items: makeItems(6, [
      "Rollout Buffer",
      "Old Log Probability",
      "New Log Probability",
      "Probability Ratio",
      "Advantage",
      "PPO Clipping",
      "Policy Loss",
      "Value Loss",
      "Entropy",
      "Mini Batch",
      "Multiple Epochs",
      "Optimizer Step",
      "collect_rollout()",
      "compute_returns()",
      "compute_gae()",
      "ppo_update()",
      "evaluate()",
      "Project · 教学版 PPO",
      "Source Reading · CleanRL PPO",
    ]),
  },
  {
    id: "part-7",
    title: "Continuous Control",
    items: makeItems(7, [
      "Continuous Action",
      "Gaussian Policy",
      "Mean",
      "Standard Deviation",
      "Action Distribution",
      "Sampling",
      "Log Probability",
      "Continuous PPO",
      "Experiment · Pendulum",
      "Experiment · Continuous Control Environment",
    ]),
  },
  {
    id: "part-8",
    title: "Mini MuJoCo Robot",
    items: makeItems(8, [
      "MuJoCo 基础结构",
      "Joint Position",
      "Joint Velocity",
      "Target / Torque",
      "Observation Design",
      "Action Design",
      "Reward Design",
      "Reset Design",
      "Termination Design",
      "Project · 1–4 DOF Mini Robot",
      "Project · 保持稳定或到达目标姿态",
    ]),
  },
  {
    id: "part-9",
    title: "Residual Reinforcement Learning",
    items: makeItems(9, [
      "Base PD Controller",
      "Residual Policy",
      "Base Action + Residual",
      "Experiment · 累积式 Residual",
      "为什么 r[t+1] = r[t] + delta[t] 会漂移",
      "Absolute Residual Target",
      "Bounded Residual",
      "Slew Limiter",
      "Applied Residual",
      "Action Envelope",
      "Action Saturation",
      "Safety Gate",
    ]),
  },
  {
    id: "part-10",
    title: "Reset / Termination / Reward",
    items: makeItems(10, [
      "Reset State",
      "Reward Penalty",
      "Shadow Diagnostic",
      "Episode Termination",
      "Hard Stop",
      "Experiment · 错误瞬时接触 Termination",
      "Episode 过短对 PPO 的影响",
      "Training Failure vs Engineering Safety Failure",
    ]),
  },
  {
    id: "part-11",
    title: "Mini Fight Ready",
    items: makeItems(11, [
      "Target Joint Pose",
      "Body Height",
      "Balance",
      "Ready Pose Acquisition",
      "Ready Pose Hold",
      "Reward Curve",
      "Episode Duration",
      "Pose Error",
      "Residual Utilization",
      "Control Effort",
      "Success Rate",
      "Project · Normal State → Fight Ready → Hold",
    ]),
  },
  {
    id: "part-12",
    title: "开源机器人 RL 项目阅读",
    items: makeItems(12, [
      "CleanRL · PPO",
      "Gymnasium · Env Interface",
      "Isaac Lab · Direct RL Workflow",
      "Isaac Lab · Observation",
      "Isaac Lab · Action",
      "Isaac Lab · Reward",
      "Isaac Lab · Reset",
      "Isaac Lab · Termination",
      "EngineAI RL Lab · T800",
      "Whole-Body Tracking",
      "AMP",
      "Locomotion / Motion Tracking",
    ]),
  },
  {
    id: "part-13",
    title: "回到真实 T800 Fight Project",
    items: makeItems(13, [
      "MuJoCo",
      "Observation",
      "StudentV8 / Pure D10",
      "D10 Residual",
      "Fight Adapter",
      "Action Composition",
      "Barrier",
      "q_des",
      "PD",
      "Torque",
      "MuJoCo Closed Loop",
      "Trajectory",
      "Reward",
      "Advantage",
      "PPO",
      "Fight Adapter Update",
      "Reset",
      "Episode",
      "Termination",
      "Shadow",
      "Hard Stop",
      "Final · 自己画出完整 T800 Fight Control Pipeline",
      "Final · 自己解释一个 bug 属于系统哪一层",
      "Final · 自己选择应该观察哪些变量",
      "Final · 自己修改并验证一个小模块",
    ]),
  },
];

type LegacyGroup = [part: number, indexes: number[]];
type CourseItemDefinition = {
  slug: string;
  label: string;
  legacy?: LegacyGroup[];
};

const defineItem = (
  slug: string,
  label: string,
  ...legacy: LegacyGroup[]
): CourseItemDefinition => ({ slug, label, legacy });

const makeCourseItems = (
  part: number,
  definitions: CourseItemDefinition[],
): RoadmapItem[] => definitions.map(({ slug, label, legacy = [] }) => ({
  id: `part-${part}-${slug}`,
  label,
  legacyIds: legacy.flatMap(([legacyPart, indexes]) => indexes.flatMap((index) => {
    const oldId = legacyRoadmap[legacyPart - 1]?.items[index - 1]?.id;
    return oldId ? [oldId] : [];
  })),
}));

export const roadmap: RoadmapPart[] = [
  {
    id: "part-1",
    title: "PyTorch 与神经网络基础",
    items: makeCourseItems(1, [
      defineItem("tensor-shape-batch-linear", "Tensor、Shape、Batch、Linear · 用批量张量建立输入到输出的线性映射", [1, [1]]),
      defineItem("forward-loss-gradient-backward", "Forward、Loss、Gradient、Backward · 跑通一次前向计算、损失和反向梯度", [1, [2]]),
      defineItem("activation-mlp", "Activation 与 MLP · 组合非线性层并训练一个小型 MLP", [1, [3]]),
      defineItem("computational-graph-autograd", "Computational Graph 与 Autograd · 追踪计算依赖并验证梯度", [1, [4]]),
      defineItem("optimizer-parameter-update", "Optimizer 与 Parameter Update · 完成参数更新并检查 loss 变化", [1, [5]]),
      defineItem("train-validation", "Train / Validation · 划分数据并比较训练与验证表现", [1, [6]]),
      defineItem("tiny-neural-controller", "Project · Tiny Neural Controller · 输入 [position, velocity, target]，输出 control action", [1, [7]]),
    ]),
  },
  {
    id: "part-2",
    title: "机器人控制基础",
    items: makeCourseItems(2, [
      defineItem("state-control-chain", "状态量与控制链 · q / qdot / q_des / torque；区分目标与真实 q；理解 torque → acceleration → qdot → q", [2, [1, 5, 6]]),
      defineItem("pd-controller", "PD Controller · 理解 position error、P 项、D 项、阻尼与 PD formula", [2, [2]]),
      defineItem("kp-kd-oscillation", "Experiment · Kp / Kd / Oscillation · 比较 Kp 太小/太大、Kd=0、damping、overshoot 与 oscillation", [2, [3, 4]]),
      defineItem("dynamics-timing", "Dynamics & Timing Intuition · inertia、damping、friction、integration timestep、control/physics frequency，以及 acceleration=torque 的教学简化", [2, [7]]),
      defineItem("safety-plot-experiment", "Safety & Plot Experiment · 应用 joint/torque limits，绘制 q(t)、qdot(t)、q_des(t)、torque(t)", [2, [8, 9]]),
    ]),
  },
  {
    id: "part-3",
    title: "Gymnasium 与 RL Environment",
    items: makeCourseItems(3, [
      defineItem("env-interface", "Env Interface · 实现 reset() / step() 与 episode；组织 observation、action、reward、terminated、truncated", [3, [1, 2, 5, 6, 7]]),
      defineItem("observation-action-contract", "Observation / Action Contract · 为 shape、units、scale、bounds、normalization、history 定义可验证接口", [3, [3, 4]]),
      defineItem("mini-gymnasium-environment", "Project · Mini Gymnasium Environment · 自己完整实现并运行一个小环境", [3, [8]]),
      defineItem("short-episode-debug", "Debug Case · Short Episode · 复现 reset state、18 ms / 31 ms episode、support rule 与错误 termination", [3, [9]]),
    ]),
  },
  {
    id: "part-4",
    title: "强化学习基础与 REINFORCE",
    items: makeCourseItems(4, [
      defineItem("rl-loop", "RL Loop · 串起 state、action、reward、trajectory、return、discount factor 与 policy", [4, [1, 2, 3, 4, 5]]),
      defineItem("random-policy-rollout", "Experiment · Random Policy & Rollout · 用随机策略收集并检查 trajectory", [4, [6]]),
      defineItem("policy-gradient-intuition", "Policy Gradient Intuition · 解释 reward 如何经 log probability 改变网络参数，并写出 policy loss", [4, [7]]),
      defineItem("reinforce-project", "Project · REINFORCE · 实现 collect trajectory、compute return、policy loss、backward 与 optimizer step", [4, [8, 9, 10, 11, 12]]),
      defineItem("diagnose-reinforce", "Diagnose REINFORCE · 通过实验定位 variance、instability 与 reward scale 对训练的影响", [5, [7]]),
    ]),
  },
  {
    id: "part-5",
    title: "Actor-Critic 与 GAE",
    items: makeCourseItems(5, [
      defineItem("actor-critic-value", "Actor / Critic / V(s) · 说明策略与价值网络各自预测什么、如何协作", [5, [1, 2, 3]]),
      defineItem("return-bootstrap-advantage", "Return / Bootstrap / Advantage · 用 Advantage = 实际表现 − 预期表现解释价值估计", [5, [4, 5, 6]]),
      defineItem("gae", "GAE · 实现 generalized advantage estimate，并解释 lambda / gamma 的直觉", [5, [8]]),
      defineItem("mini-actor-critic", "Project · Mini Actor-Critic · 实现 rollout、value loss、policy loss 与 advantage"),
    ]),
  },
  {
    id: "part-6",
    title: "PPO",
    items: makeCourseItems(6, [
      defineItem("ppo-data-flow", "PPO Data Flow · 追踪 rollout buffer 中的 old log probability、value、reward、done 与 advantage", [6, [1, 2, 5]]),
      defineItem("ppo-ratio-clipping", "PPO Ratio & Clipping · 从 old/new log prob 推导 ratio 并验证 clipping", [6, [3, 4, 6]]),
      defineItem("ppo-loss", "PPO Loss · 组合 policy loss、value loss 与 entropy 并观察各项作用", [6, [7, 8, 9]]),
      defineItem("gae-returns-pipeline", "GAE / Returns Pipeline · 实现并验证 compute_returns() 与 compute_gae()", [6, [14, 15]]),
      defineItem("ppo-update", "PPO Update · 实现 mini batch、多轮 epochs 与 optimizer step", [6, [10, 11, 12, 16]]),
      defineItem("teaching-ppo-project", "Project · Teaching PPO · 自己实现 collect_rollout()、compute_gae()、ppo_update() 并 evaluate()", [6, [13, 17, 18]]),
      defineItem("cleanrl-ppo-reading", "Source Reading · CleanRL PPO · 将源码中的模块逐一对应到自己的实现", [6, [19]]),
    ]),
  },
  {
    id: "part-7",
    title: "Continuous Control",
    items: makeCourseItems(7, [
      defineItem("gaussian-policy", "Gaussian Policy · 用 mean、std、distribution 与 sampling 生成 continuous action", [7, [1, 2, 3, 4, 5, 6]]),
      defineItem("continuous-log-prob-ppo", "Log Probability & Continuous PPO · 计算连续动作的 log probability 并接入 PPO", [7, [7, 8]]),
      defineItem("pendulum-experiment", "Experiment · Pendulum · 训练、观察并解释连续控制 rollout", [7, [9]]),
      defineItem("continuous-ppo-controller", "Project · Continuous PPO Controller · 用连续策略控制一个环境并验证学习效果", [7, [10]]),
    ]),
  },
  {
    id: "part-8",
    title: "Mini MuJoCo Robot",
    items: makeCourseItems(8, [
      defineItem("mujoco-robot-basics", "MuJoCo Robot Basics · 读懂 body、joint、actuator、qpos、qvel 与 ctrl", [8, [1, 2, 3, 4]]),
      defineItem("robot-observation-design", "Robot Observation Design · 选择 q、qdot、target、contact、history 并处理 normalization", [8, [5]]),
      defineItem("robot-action-design", "Robot Action Design · 比较 torque、q_des、delta、scale 与 clip 的动作含义", [8, [6]]),
      defineItem("robot-reward-reset-termination", "Reward / Reset / Termination · 为机器人任务设计奖励、初态与 episode 结束条件", [8, [7, 8, 9]]),
      defineItem("mini-robot-project", "Project · 1–4 DOF Mini Robot · 从环境到控制完整搭建小型机器人任务", [8, [10]]),
      defineItem("train-debug-robot", "Train & Debug · 训练到目标姿态，读取 rollout/reward curve 并诊断失败原因", [8, [11]]),
    ]),
  },
  {
    id: "part-9",
    title: "Residual Reinforcement Learning",
    items: makeCourseItems(9, [
      defineItem("base-controller-residual-policy", "Base Controller + Residual Policy · 组合基础控制器与策略修正量", [9, [1, 2, 3]]),
      defineItem("residual-drift-experiment", "Experiment · 累积 Residual 为什么漂移 · 验证 r[t+1] = r[t] + delta[t]", [9, [4, 5]]),
      defineItem("absolute-bounded-residual", "Absolute / Bounded Residual · 比较 absolute target 与受界 residual", [9, [6, 7]]),
      defineItem("slew-saturation-envelope", "Slew / Saturation / Envelope · 实现 slew limiter、saturation 与 action envelope", [9, [8, 10, 11]]),
      defineItem("safe-residual-controller", "Project · Safe Residual Controller · 串起 base action、residual、composition、applied action 与 safety gate", [9, [9, 12]]),
    ]),
  },
  {
    id: "part-10",
    title: "Reward / Reset / Termination / Safety",
    items: makeCourseItems(10, [
      defineItem("reward-design", "Reward Design · 组合 task reward、penalty 与 shaping 并检查各项量级", [10, [2]]),
      defineItem("reset-episode-termination", "Reset / Episode / Termination · 设计 reset state、episode 边界与训练终止条件", [10, [1, 4]]),
      defineItem("shadow-termination-hard-stop", "Shadow Diagnostic / Termination / Hard Stop · 解释诊断、训练结束与工程急停的不同职责", [10, [3, 5]]),
      defineItem("bad-termination-experiment", "Experiment · Bad Termination · 复现瞬时 contact 异常、过短 episode、无效 PPO trajectory，并区分 Training Failure 与 Engineering Safety Failure", [10, [6, 7, 8]]),
    ]),
  },
  {
    id: "part-11",
    title: "Mini Fight Ready",
    items: makeCourseItems(11, [
      defineItem("fight-ready-objective", "Fight Ready Objective · 定义 target joint pose、body height 与 balance 的成功条件", [11, [1, 2, 3]]),
      defineItem("acquisition-hold", "Acquisition → Hold · 让机器人先到达 Fight Ready 姿态，再稳定保持", [11, [4, 5]]),
      defineItem("normal-to-fight-ready-project", "Project · Normal State → Fight Ready → Hold · 完成完整状态切换与保持流程", [11, [12]]),
      defineItem("fight-ready-evaluation", "Evaluation · 联合评估 reward curve、episode duration、pose error、residual utilization、control effort 与 success rate", [11, [6, 7, 8, 9, 10, 11]]),
    ]),
  },
  {
    id: "part-12",
    title: "阅读成熟 RL / Robot 项目",
    items: makeCourseItems(12, [
      defineItem("cleanrl", "CleanRL · 阅读 PPO 实现并定位 rollout、loss 与 update", [12, [1]]),
      defineItem("gymnasium", "Gymnasium · 对照 env interface 理解标准环境交互", [12, [2]]),
      defineItem("isaac-lab-direct-rl", "Isaac Lab Direct RL · 跟踪 observation、action、reward、reset 与 termination", [12, [3, 4, 5, 6, 7, 8]]),
      defineItem("engineai-rl-lab", "EngineAI RL Lab · 定位 T800、whole-body tracking、AMP、locomotion 与 motion tracking", [12, [9, 10, 11, 12]]),
    ]),
  },
  {
    id: "part-13",
    title: "回到真实 T800 Fight Project",
    items: makeCourseItems(13, [
      defineItem("reconstruct-t800-control-pipeline", "Reconstruct T800 Control Pipeline · MuJoCo → observation → StudentV8 / Pure D10 → D10 residual → Fight adapter → action composition → barrier / safety → q_des → PD → torque → MuJoCo", [13, [1, 3, 5, 7, 9, 11]]),
      defineItem("reconstruct-ppo-training-pipeline", "Reconstruct PPO Training Pipeline · trajectory → reward → value → advantage → PPO loss → optimizer → policy update", [13, [12, 13, 14, 15]]),
      defineItem("observation-action-interface-audit", "Observation / Action Interface Audit · 检查 shape、units、normalization、history、action meaning、scale、residual、clip、slew 与 limits", [13, [2, 4, 6, 8, 10]]),
      defineItem("debugging-exam", "Debugging Exam · 面对真实失败现象，判断根因属于 reset、observation、action、controller、reward、termination、safety 还是 PPO", [13, [16, 17, 18, 19, 20, 21]]),
      defineItem("experiment-design-exam", "Experiment Design Exam · 选择 q、qdot、q_des、torque、action、residual、contact、reward terms、termination reason，并设计可证伪实验", [13, [22, 23, 24]]),
      defineItem("t800-final-project", "Final Project · 自己修改真实 T800 Fight Project 的一个小模块，运行验证并解释结果", [13, [25]]),
    ]),
  },
];

export const DEFAULT_COMPLETED_IDS = [
  "part-1-tensor-shape-batch-linear",
  "part-1-forward-loss-gradient-backward",
  "part-1-activation-mlp",
  "part-1-computational-graph-autograd",
  "part-1-optimizer-parameter-update",
  "part-1-train-validation",
  "part-1-tiny-neural-controller",
  "part-2-state-control-chain",
  "part-2-pd-controller",
];

export const graduationStandards = [
  "自己搭建并训练一个 PyTorch neural controller。",
  "自己实现 Gymnasium environment。",
  "自己实现教学版 PPO。",
  "自己训练一个简单 MuJoCo Robot。",
  "理解 base controller + residual policy。",
  "区分 reward / reset / termination / shadow / hard stop。",
  "阅读 CleanRL / Isaac Lab / EngineAI RL Lab 的相关模块。",
  "自己画出 T800 Fight 控制与训练 pipeline。",
  "遇到失败时能判断属于系统哪一层。",
  "能选择正确变量、提出假设、设计实验并验证。",
  "能自己修改和验证一个真实 T800 小模块。",
];

export const allItemIds = roadmap.flatMap((part) => part.items.map((item) => item.id));
export const totalItems = allItemIds.length;
