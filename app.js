const STORAGE_KEY = "labflow-state-v10";

const recentTasks = [
  labTask("sx-top-1", "p1", "删减 pretended-play 问题并试 prompt", "skye-xi-chen", "urgent", "todo", "改得更 interactive，加入社交代价，让任务更有趣。"),
  labTask("sx-top-2", "p1", "机器人换脸与声音匹配 prompt", "skye-xi-chen", "urgent", "todo", "调用人物脸，匹配男女声音，呈现对话场景，并通知 Navid。"),
  labTask("sx-top-3", "p2", "Pre-training ER 文章 comment address", "skye-xi-chen", "urgent", "progress", "加 video-only validation，算 power，重新分析，周一汇报修改进展。"),
  labTask("sx-top-4", "p4", "会议 abstract 汇总与安排", "skye-xi-chen", "high", "todo", "汇总近期会议 abstracts，并安排后续提交或整理动作。"),
  labTask("sx-top-5", "p1", "联系 Tony 写故事梗概", "skye-xi-chen", "high", "todo", "明确 icon、人物介绍和事件介绍。"),
  labTask("sx-top-6", "p5", "编 complex emotion 英语故事", ["skye-xi-chen", "dongjin-kim"], "high", "todo", "Skye 和 Dongjin KIM：每个 emotion 写 10 个，并确认 Dongjin 的英语 appraisal theory 分析进展。", [
    { text: "Ask Dongjin KIM about analysis progress", done: false }
  ]),
  labTask("sx-top-7", "p1", "和 Yanyu YANG 修改 prompt", ["skye-xi-chen", "yanyu-yang"], "high", "todo", "Skye 和 Yanyu YANG 一起收紧 ITF prompt。"),
  labTask("sx-top-8", "p1", "完成两个 Furhat 展示故事", ["skye-xi-chen", "ting-zhang"], "high", "progress", "和 Ting ZHANG 完成 07 Mind-reading 与 06 Pretended-play。", [
    { text: "07 Mind-reading", done: false },
    { text: "06 Pretended-play", done: false }
  ]),
  labTask("sx-top-9", "p1", "和 Navid 修改 pretended-play 功能", ["skye-xi-chen", "navid"], "high", "todo", "和 Navid 一起修改机器人的 pretended-play 功能。"),
  labTask("sx-top-10", "p2", "Pre-training 文章修改 outline", "skye-xi-chen", "high", "todo", "整理 Emotion Recognition pre-training 文章修改 outline。"),
  labTask("sx-other-1", "p6", "修改 English focus 文章 discussion", "skye-xi-chen", "normal", "todo", "先推进 discussion 部分，不抢 Top 任务优先级。"),
  labTask("sx-other-2", "p7", "联系 Yitian 修改 robot 文章", "skye-xi-chen", "normal", "todo", "确认 robot interaction 文章修改范围与下一版时间。"),
  labTask("sx-other-3", "p8", "Perturbation dissertation", "skye-xi-chen", "normal", "todo", "博士论文相关任务，放在 Top 之后推进。"),
  labTask("sx-done-1", "p9", "写 multimodal assistant robot and AI draft", "skye-xi-chen", "normal", "done", "已完成 draft。", [
    { text: "Draft completed", done: true }
  ]),
  labTask("sx-done-2", "p1", "完成 speech validation 实验组设计", "skye-xi-chen", "normal", "done", "ITF speech validation 实验设计已完成。", [
    { text: "Design completed", done: true }
  ]),
  labTask("tz-1", "p1", "确定训练部分 speech 和 music 对应", "ting-zhang", "high", "todo", "ITF 训练部分：确认 speech 和 music 的对应关系。"),
  labTask("tz-2", "p1", "跟 Meixuan LI 确认 fNIRS 细节", ["ting-zhang", "meixuan-li"], "high", "todo", "确认 fNIRS 部分具体实验任务细节。"),
  labTask("tz-3", "p9", "Multimodal assistive technology and AI draft", "ting-zhang", "high", "todo", "推进 multimodal assistive technology and AI draft。"),
  labTask("tz-4", "p1", "跟 RA 确认 music 前测切分", "ting-zhang", "high", "todo", "协调 music 前测部分切分。"),
  labTask("tz-5", "p1", "检查粤语男演员 validation 切分", "ting-zhang", "high", "todo", "检查 RA 前测粤语男演员 validation 部分切分。"),
  labTask("tz-6", "p4", "总结 keynote 与 speaker 题目", "ting-zhang", "normal", "todo", "AI 会议：整理 keynote 信息和其他 speaker 演讲题目。"),
  labTask("tz-7", "p10", "修改 Science Robotics 论文", "ting-zhang", "normal", "todo", "继续 Science Robotics 论文修改。"),
  labTask("tz-8", "p1", "整理 commercial consent forms", "ting-zhang", "normal", "todo", "整理全部演员 commercial consent forms；英语部分仍缺。"),
  labTask("fz-1", "p8", "和 Skye 做 power analysis", ["fang-zhou", "skye-xi-chen"], "high", "todo", "博士论文项目：和 Skye Xi CHEN 一起完成 power analysis。"),
  labTask("fz-2", "p8", "博士论文实验设计", "fang-zhou", "high", "todo", "梳理博士论文实验设计方案。"),
  labTask("fz-3", "p8", "机器人调试", "fang-zhou", "high", "progress", "博士论文项目：推进机器人调试。")
];

function labTask(id, projectId, title, assignee, priority, status, notes, checklist = []) {
  const assignees = Array.isArray(assignee) ? assignee : assignee ? [assignee] : [];
  return {
    id,
    projectId,
    title,
    assignee: assignees[0] || "",
    assignees,
    status,
    priority,
    due: "2026-08-31",
    notes,
    checklist,
    comments: [],
    attachments: []
  };
}

const seed = {
  members: [
    { id: "sarah-chen", name: "Sarah CHEN", role: "Supervisor" },
    { id: "yixin-zhang", name: "Yixin ZHANG", role: "RAP" },
    { id: "bruce-wang", name: "Bruce X. WANG", role: "RAP" },
    { id: "navid", name: "Navid", role: "RAP" },
    { id: "ting-zhang", name: "Ting ZHANG", role: "Post-doc" },
    { id: "dongjin-kim", name: "Dongjin KIM", role: "Post-doc" },
    { id: "skye-xi-chen", name: "Skye Xi CHEN", role: "Post-doc" },
    { id: "fang-zhou", name: "Fang ZHOU", role: "PhD" },
    { id: "meixuan-li", name: "Meixuan LI", role: "PhD" },
    { id: "zhuoran-li", name: "Zhuoran LI", role: "PhD" },
    { id: "jianfei-ma", name: "Jianfei MA", role: "PhD" },
    { id: "bingxin-liu", name: "Bingxin LIU", role: "PhD" },
    { id: "kexin-liu", name: "Kexin LIU", role: "PhD" },
    { id: "yanyu-yang", name: "Yanyu YANG", role: "RA" },
    { id: "xiaoyu-yu", name: "Xiaoyu YU", role: "RA" },
    { id: "chloe", name: "Chloe", role: "RA" },
    { id: "yuyan-yin", name: "Yuyan YIN", role: "RA" },
    { id: "tony", name: "Tony", role: "RA" }
  ],
  projects: [
    {
      id: "p1",
      title: "ITF",
      description: "Track proposal writing, deliverables, timelines, and evidence for the ITF project.",
      status: "active",
      priority: "high",
      deadline: "2026-09-04",
      members: ["sarah-chen", "ting-zhang", "skye-xi-chen", "navid", "yanyu-yang"]
    },
    {
      id: "p2",
      title: "Emotion Recognition",
      description: "Organize stimuli, annotation, analysis, and progress for emotion recognition research.",
      status: "active",
      priority: "normal",
      deadline: "2026-09-11",
      members: ["skye-xi-chen", "fang-zhou", "meixuan-li", "xiaoyu-yu"]
    },
    {
      id: "p3",
      title: "Gesture",
      description: "Coordinate gesture data, coding schemes, meetings, and next analysis steps.",
      status: "paused",
      priority: "low",
      deadline: "2026-09-18",
      members: ["sarah-chen", "yixin-zhang", "skye-xi-chen"]
    },
    {
      id: "p4",
      title: "AI Conference",
      description: "Collect abstracts, keynote notes, speaker topics, and submission planning.",
      status: "active",
      priority: "normal",
      deadline: "2026-08-31",
      members: ["skye-xi-chen", "ting-zhang"]
    },
    {
      id: "p5",
      title: "Appraisal Theory",
      description: "Coordinate story writing, complex-emotion materials, and English analysis progress.",
      status: "active",
      priority: "high",
      deadline: "2026-08-31",
      members: ["skye-xi-chen", "dongjin-kim"]
    },
    {
      id: "p6",
      title: "English focus",
      description: "Move the manuscript discussion forward with clear revision ownership.",
      status: "active",
      priority: "normal",
      deadline: "2026-08-31",
      members: ["skye-xi-chen"]
    },
    {
      id: "p7",
      title: "Robot interaction",
      description: "Track robot manuscript coordination, Yitian follow-up, and interaction revisions.",
      status: "active",
      priority: "normal",
      deadline: "2026-08-31",
      members: ["skye-xi-chen", "navid"]
    },
    {
      id: "p8",
      title: "Dissertation",
      description: "Keep dissertation power analysis, design, perturbation work, and robot debugging visible.",
      status: "active",
      priority: "high",
      deadline: "2026-08-31",
      members: ["skye-xi-chen", "fang-zhou"]
    },
    {
      id: "p9",
      title: "Multimodal assistive technology and AI",
      description: "Track draft writing and revision work for the multimodal assistive technology and AI project.",
      status: "active",
      priority: "high",
      deadline: "2026-08-31",
      members: ["skye-xi-chen", "ting-zhang"]
    },
    {
      id: "p10",
      title: "Science Robotics",
      description: "Manage Science Robotics paper revision tasks and next writing decisions.",
      status: "active",
      priority: "normal",
      deadline: "2026-08-31",
      members: ["ting-zhang"]
    }
  ],
  tasks: [
    {
      id: "t1",
      projectId: "p1",
      title: "Freeze benchmark task list",
      assignee: "ting-zhang",
      status: "todo",
      priority: "urgent",
      due: "2026-08-30",
      notes: "Needs supervisor confirmation before anyone runs new jobs.",
      checklist: [
        { text: "Review mutation panel", done: true },
        { text: "Confirm exclusion criteria", done: false },
        { text: "Post final task list", done: false }
      ],
      comments: [
        { author: "Sarah CHEN", text: "Please make the criteria explicit so the RA team can follow without guessing." }
      ],
      attachments: ["benchmark-outline.pdf"]
    },
    {
      id: "t2",
      projectId: "p1",
      title: "Run baseline comparison",
      assignee: "yanyu-yang",
      status: "progress",
      priority: "high",
      due: "2026-09-02",
      notes: "Start with the small batch, then extend after review.",
      checklist: [
        { text: "Prepare environment", done: true },
        { text: "Run small batch", done: true },
        { text: "Summarize failures", done: false }
      ],
      comments: [{ author: "Yanyu YANG", text: "Small batch is running. I will update the failure table tomorrow." }],
      attachments: []
    },
    {
      id: "t3",
      projectId: "p2",
      title: "Check drift in batch two",
      assignee: "fang-zhou",
      status: "blocked",
      priority: "high",
      due: "2026-09-01",
      notes: "Waiting for raw export from the instrument computer.",
      checklist: [
        { text: "Request raw export", done: true },
        { text: "Run drift notebook", done: false }
      ],
      comments: [{ author: "Fang ZHOU", text: "Blocked until the export finishes. I left a note in the equipment log." }],
      attachments: ["calibration-notebook.ipynb"]
    },
    {
      id: "t4",
      projectId: "p2",
      title: "Draft five-slide meeting update",
      assignee: "meixuan-li",
      status: "todo",
      priority: "normal",
      due: "2026-09-05",
      notes: "Keep it short: question, method, current signal, risk, next step.",
      checklist: [
        { text: "Collect current figures", done: false },
        { text: "Draft slide notes", done: false }
      ],
      comments: [],
      attachments: []
    },
    {
      id: "t5",
      projectId: "p3",
      title: "Map grant aims to lab evidence",
      assignee: "sarah-chen",
      status: "done",
      priority: "normal",
      due: "2026-08-28",
      notes: "First pass is complete; needs discussion next week.",
      checklist: [
        { text: "List candidate aims", done: true },
        { text: "Match preliminary data", done: true }
      ],
      comments: [{ author: "Sarah CHEN", text: "Complete enough for planning. We should revisit after project p1 stabilizes." }],
      attachments: ["aims-map.md"]
    },
    ...recentTasks
  ],
  community: [
    {
      id: "c1",
      type: "discussion",
      title: "Cautious language for article drafts",
      author: "Sarah CHEN",
      body: "Useful reference for hedging claims in academic writing: when to use forms like 'may', 'appears to', and 'suggests' without weakening the argument.",
      link: "https://www.phrasebank.manchester.ac.uk/using-cautious-language/",
      code: "",
      image: "",
      saved: true,
      likes: 14,
      created: "2026-08-29",
      comments: [
        { author: "Skye Xi CHEN", text: "This would be useful as a checklist before paper submission." }
      ]
    },
    {
      id: "c2",
      type: "code",
      title: "Xuyi's ProsodyPro Praat workflow",
      author: "Xuyi",
      body: "A place to collect the ProsodyPro Praat script, notes on F0 extraction, and examples for intonation annotation.",
      link: "",
      code: "runScript: ProsodyPro.praat\npitch_floor = 75\npitch_ceiling = 500\nsave_tier = \"intonation\"",
      image: "",
      saved: false,
      likes: 11,
      created: "2026-08-28",
      comments: []
    },
    {
      id: "c3",
      type: "method",
      title: "Ordinal variables: analysis choices",
      author: "Fang ZHOU",
      body: "Discussion starter: when should we use ordinal logistic regression, non-parametric tests, or treat a scale as approximately continuous?",
      link: "",
      code: "MASS::polr(response ~ group + covariate, data = df, Hess = TRUE)",
      image: "",
      saved: false,
      likes: 9,
      created: "2026-08-27",
      comments: []
    },
    {
      id: "c4",
      type: "web",
      title: "SICHEN Lab official members page",
      author: "Sarah CHEN",
      body: "Official lab members page for checking people, roles, and lab identity.",
      link: "https://sichen-lab.com/members",
      code: "",
      image: "",
      saved: true,
      likes: 12,
      created: "2026-08-29",
      comments: []
    }
  ],
  meetings: [
    {
      id: "lab-meeting",
      title: "Lab meeting",
      day: "Wednesday",
      time: "17:00",
      timezone: "HK Time",
      link: "https://polyu.zoom.us/j/83364588563?pwd=Z39Xh7ZQqenaZYGwYmNg8rnXvY6c6y.1#success",
      notes: "Weekly lab progress, project updates, and discussion."
    },
    {
      id: "ra-meeting",
      title: "RA meeting",
      day: "Friday",
      time: "14:00",
      timezone: "HK Time",
      link: "https://polyu.zoom.us/j/84677415509?pwd=zYLpifw0aGRizZqkVn4KJ7gaHbQGat.1",
      notes: "RA task coordination, blockers, and next steps."
    }
  ],
  activity: [
    "Yanyu YANG updated baseline comparison.",
    "Fang ZHOU marked calibration drift as blocked.",
    "Sarah CHEN completed the first grant aims map."
  ]
};

const MEDIA_DB_NAME = "labflow-media";
const MEDIA_STORE_NAME = "uploads";
const storedMediaUrls = new Map();

let state = loadState();
let selectedProject = state.projects[0]?.id || "";
let selectedPerson = state.members[0]?.id || "";
let view = "project";
let currentTab = "today";
let activeTaskId = null;
let query = "";
let peopleMenu = null;
let projectMenu = null;
let taskMenu = null;
let projectEditorId = null;
let communityFilter = "all";

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? normalizeState(JSON.parse(saved)) : normalizeState(structuredClone(seed));
  } catch {
    return normalizeState(structuredClone(seed));
  }
}

function normalizeState(nextState) {
  const community = Array.isArray(nextState.community) ? nextState.community : structuredClone(seed.community);
  const tasks = Array.isArray(nextState.tasks) ? nextState.tasks : structuredClone(seed.tasks);
  return {
    ...structuredClone(seed),
    ...nextState,
    tasks: tasks.map(normalizeTask),
    community: community.map((post) => ({
      ...post,
      media: normalizePostMedia(post),
      comments: Array.isArray(post.comments) ? post.comments : []
    })),
    meetings: Array.isArray(nextState.meetings) ? nextState.meetings : structuredClone(seed.meetings)
  };
}

function normalizeTask(task) {
  const ids = taskAssigneeIds(task);
  return {
    ...task,
    assignee: ids[0] || "",
    assignees: ids
  };
}

function normalizePostMedia(post) {
  if (post.media?.url || post.media?.storageKey) {
    const storedUrl = post.media.storageKey ? storedMediaUrls.get(post.media.storageKey) : "";
    return {
      kind: post.media.kind || mediaKindFromUrl(post.media.url || post.media.name || "", post.type),
      url: storedUrl || post.media.url || "",
      storageKey: post.media.storageKey || "",
      name: post.media.name || post.title || "Attachment"
    };
  }
  if (post.image) {
    return { kind: "image", url: post.image, name: post.title || "Image" };
  }
  return null;
}

function saveState(message = "Saved") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast(message);
  render();
}

function memberName(id) {
  return state.members.find((member) => member.id === id)?.name || "Unassigned";
}

function taskAssigneeIds(task) {
  const ids = Array.isArray(task.assignees) ? task.assignees : task.assignee ? [task.assignee] : [];
  return [...new Set(ids.filter(Boolean))];
}

function taskHasMember(task, memberId) {
  return taskAssigneeIds(task).includes(memberId);
}

function participantNames(task) {
  const names = taskAssigneeIds(task).map(memberName);
  return names.length ? names.join(", ") : "Unassigned";
}

function participantSummary(task) {
  const names = taskAssigneeIds(task).map(memberName);
  if (!names.length) return "Unassigned";
  if (names.length <= 2) return names.join(", ");
  return `${names[0]} + ${names.length - 1}`;
}

function memberRole(id) {
  return state.members.find((member) => member.id === id)?.role || "";
}

function roleGroups() {
  const order = ["Supervisor", "RAP", "Post-doc", "PhD", "RA"];
  return order.map((role) => [role, state.members.filter((member) => member.role === role)]);
}

function projectTitle(id) {
  return state.projects.find((project) => project.id === id)?.title || "No project";
}

function taskProgress(projectId) {
  const project = state.projects.find((item) => item.id === projectId);
  if (Number.isFinite(project?.progressOverride)) return project.progressOverride;
  const tasks = state.tasks.filter((task) => task.projectId === projectId);
  if (!tasks.length) return 0;
  return Math.round((tasks.filter((task) => task.status === "done").length / tasks.length) * 100);
}

function daysUntil(dateText) {
  const today = new Date("2026-08-29T00:00:00");
  const target = new Date(`${dateText}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function dueLabel(dateText) {
  const days = daysUntil(dateText);
  if (days < 0) return "overdue";
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  return `${days} days`;
}

function icon(name) {
  const paths = {
    plus: "M12 5v14M5 12h14",
    file: "M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5zM14 2v5h5",
    reset: "M3 12a9 9 0 1 0 3-6.7M3 4v6h6",
    trash: "M3 6h18M8 6V4h8v2M7 6l1 15h8l1-15",
    close: "M6 6l12 12M18 6 6 18",
    spark: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"
  };
  return `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${paths[name]}"/></svg>`;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="mark" aria-label="LabFlow">
            <span class="mark-text">LF</span>
            <span class="mark-bars"><i></i><i></i><i></i><i></i></span>
          </div>
          <div>
            <h1>LabFlow</h1>
            <p>What to do next?</p>
          </div>
        </div>
        <div class="top-actions">
          <button class="btn" data-action="reset" title="Restore sample data">${icon("reset")} Reset</button>
          <button class="btn primary" data-action="new-task">${icon("plus")} Task</button>
        </div>
      </header>

      ${renderTabNav()}
      ${renderActiveTab()}
      <footer class="site-footer">
        <span>Created by Skye Xi CHEN</span>
        <a href="mailto:skye.chen@polyu.edu.hk">skye.chen@polyu.edu.hk</a>
      </footer>
    </main>
    ${renderDrawer()}
    ${renderPeopleMenu()}
    ${renderProjectMenu()}
    ${renderTaskMenu()}
    ${renderProjectEditor()}
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  `;
  bindEvents();
}

function renderTabNav() {
  const tabs = [
    ["today", "Today", "Daily priorities"],
    ["projects", "Projects", "Project boards"],
    ["people", "People", "Ownership"],
    ["meeting", "Meeting", "Zoom schedule"],
    ["community", "Community", "Ideas and shares"]
  ];
  return `
    <nav class="app-tabs" aria-label="Main sections">
      ${tabs
        .map(
          ([id, label, helper]) => `
            <button class="${currentTab === id ? "active" : ""}" data-tab="${id}">
              <span>${label}</span>
              <small>${helper}</small>
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}

function renderActiveTab() {
  if (currentTab === "projects") return renderProjectsPage();
  if (currentTab === "people") return renderPeoplePage();
  if (currentTab === "meeting") return renderMeetingPage();
  if (currentTab === "community") return renderCommunityPage();
  return renderTodayPage();
}

function renderTodayPage() {
  const unfinished = state.tasks.filter((task) => task.status !== "done");
  const urgent = unfinished.filter((task) => task.priority === "urgent" || task.status === "blocked" || daysUntil(task.due) <= 2);
  const nextTasks = unfinished.sort((a, b) => daysUntil(a.due) - daysUntil(b.due)).slice(0, 6);
  return `
    <section class="tab-page today-page">
      <div class="page-intro">
        <h2>Start here</h2>
        <p>The lab's shortest path to what matters today.</p>
      </div>
      <div class="today-layout no-pulse">
        <section class="panel focus-panel">
          <div class="panel-header">
            <div>
              <h2>Focus</h2>
              <p>${urgent.length} task${urgent.length === 1 ? "" : "s"} need attention</p>
            </div>
          </div>
          <div class="task-list airy">
            ${(urgent.length ? urgent : nextTasks).slice(0, 4).map(renderTaskRow).join("")}
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <div>
              <h2>Next up</h2>
              <p>Sorted by deadline</p>
            </div>
          </div>
          <div class="task-list airy">
            ${nextTasks.map(renderTaskRow).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderProjectsPage() {
  return `
    <section class="tab-page">
      <div class="page-intro">
        <h2>Projects</h2>
        <p>Choose one project, then work its task flow.</p>
      </div>
      <div class="workspace-layout">
        ${renderProjectRail()}
        ${renderBoardPanel("project")}
      </div>
    </section>
  `;
}

function renderPeoplePage() {
  const person = state.members.find((member) => member.id === selectedPerson) || state.members[0];
  if (!person) {
    return `
      <section class="tab-page">
        <div class="page-intro">
          <h2>People</h2>
          <p>Right-click a role group to add the first member.</p>
        </div>
        <div class="people-layout">
          ${renderPeopleRail()}
          <section class="panel people-work"><div class="empty">No people yet.</div></section>
        </div>
      </section>
    `;
  }
  const personTasks = filteredTasks().filter((task) => taskHasMember(task, person.id));
  return `
    <section class="tab-page">
      <div class="page-intro">
        <h2>People</h2>
        <p>Role groups, ownership, and current work.</p>
      </div>
      <div class="people-layout">
        ${renderPeopleRail()}
        <section class="panel people-work">
          <div class="panel-header">
            <div>
              <h2>${escapeHtml(person.name)}</h2>
              <p>${person.role} · ${personTasks.filter((task) => task.status !== "done").length} open task${personTasks.length === 1 ? "" : "s"}</p>
            </div>
          </div>
          <div class="person-task-form" aria-label="Add a task for ${person.name}">
            <input data-person-task-title placeholder="New task for ${escapeHtml(person.name)}" />
            <select data-person-task-project aria-label="Project">
              ${state.projects.map((project) => `<option value="${project.id}">${project.title}</option>`).join("")}
            </select>
            <select data-person-task-priority aria-label="Priority">
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
              <option value="low">Low</option>
            </select>
            <input type="date" data-person-task-due value="2026-09-06" aria-label="Due date" />
            <button class="btn primary" data-action="add-person-task">${icon("plus")} Add</button>
          </div>
          <div class="board-toolbar">
            <input class="search" value="${escapeHtml(query)}" placeholder="Search this person's tasks" aria-label="Search people tasks" />
          </div>
          <div class="task-table">
            ${personTasks.length ? personTasks.map(renderTaskLine).join("") : `<div class="empty">No matching tasks for this member.</div>`}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderCommunityPage() {
  const visiblePosts = filteredCommunityPosts();
  return `
    <section class="tab-page">
      <div class="page-intro">
        <h2>Community</h2>
        <p>Questions, code, methods, palettes, links, and small sparks worth keeping.</p>
      </div>
      ${renderCommunityFilters()}
      <section class="community-layout">
        <aside class="panel composer-panel">
          <div class="panel-header">
            <div>
              <h2>Post something useful</h2>
              <p>Share one thing the lab can reuse.</p>
            </div>
          </div>
          <div class="community-form">
            <input data-post-title placeholder="Question, method, code note, or idea" />
            <select data-post-type aria-label="Post type">
              <option value="discussion">Discussion</option>
              <option value="method">Method</option>
              <option value="code">Code</option>
              <option value="palette">RStudio palette</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
              <option value="audio">Audio</option>
              <option value="file">File</option>
              <option value="web">Web link</option>
              <option value="favorite">Favorite</option>
            </select>
            <select data-post-author aria-label="Post author">
              ${state.members.map((member) => `<option value="${member.name}">${escapeHtml(member.name)}</option>`).join("")}
            </select>
            <textarea data-post-body placeholder="What should others know?"></textarea>
            <input data-post-link placeholder="Optional link, image, or video URL" />
            <input data-post-media type="file" aria-label="Upload media" accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.ppt,.pptx,.txt,.csv,.r,.R,.praat,.zip" />
            <textarea data-post-code placeholder="Optional code snippet"></textarea>
            <button class="btn primary" data-action="add-community-post">${icon("plus")} Publish</button>
          </div>
        </aside>
        <div class="community-feed">
          ${visiblePosts.length ? visiblePosts.map(renderPostCard).join("") : `<div class="panel empty">No ${escapeHtml(postTypeLabel(communityFilter).toLowerCase())} posts yet.</div>`}
        </div>
      </section>
    </section>
  `;
}

function communityTypes() {
  return ["all", "discussion", "code", "method", "palette", "image", "video", "audio", "file", "web", "favorite"];
}

function renderCommunityFilters() {
  return `
    <div class="community-filters" aria-label="Community filters">
      ${communityTypes()
        .map((type) => {
          const count = type === "all" ? state.community.length : state.community.filter((post) => post.type === type).length;
          return `<button class="filter-chip ${type} ${communityFilter === type ? "active" : ""}" data-community-filter="${type}" aria-pressed="${communityFilter === type}">
            <span>${escapeHtml(postTypeLabel(type))}</span>
            <strong>${count}</strong>
          </button>`;
        })
        .join("")}
    </div>
  `;
}

function filteredCommunityPosts() {
  if (communityFilter === "all") return state.community;
  return state.community.filter((post) => post.type === communityFilter);
}

function renderMeetingPage() {
  return `
    <section class="tab-page">
      <div class="page-intro">
        <h2>Meeting</h2>
        <p>Two standing Zoom rooms, kept in one obvious place.</p>
      </div>
      <section class="meeting-grid">
        ${state.meetings
          .map(
            (meeting) => `
              <article class="panel meeting-card">
                <div class="meeting-time">
                  <strong>${escapeHtml(meeting.day)}</strong>
                  <span>${escapeHtml(meeting.time)} ${escapeHtml(meeting.timezone)}</span>
                </div>
                <div class="meeting-body">
                  <h3>${escapeHtml(meeting.title)}</h3>
                  <p>${escapeHtml(meeting.notes)}</p>
                  <label class="meeting-link">
                    <span>Zoom link</span>
                    <input value="${escapeHtml(meeting.link)}" data-meeting-link="${meeting.id}" placeholder="Paste Zoom link here" />
                  </label>
                  <div class="meeting-actions">
                    <button class="btn primary" data-open-meeting="${meeting.id}" ${meeting.link ? "" : "disabled"}>Open Zoom</button>
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    </section>
  `;
}

function renderPostCard(post) {
  return `
    <article class="panel post-card">
      <div class="post-head">
        <div>
          <span class="post-type ${post.type}">${postTypeLabel(post.type)}</span>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.author)} · ${escapeHtml(post.created)}</p>
        </div>
        <button class="save-button ${post.saved ? "saved" : ""}" data-save-post="${post.id}" aria-label="${post.saved ? "Unsave" : "Save"} ${escapeHtml(post.title)}">
          ${post.saved ? "Saved" : "Save"}
        </button>
      </div>
      <p class="post-body">${escapeHtml(post.body)}</p>
      ${renderPostMedia(post)}
      ${post.link ? `<a class="post-link" href="${escapeHtml(post.link)}" target="_blank" rel="noreferrer">${escapeHtml(post.link)}</a>` : ""}
      ${post.code ? `<pre class="post-code"><code>${escapeHtml(post.code)}</code></pre>` : ""}
      <div class="post-comments">
        ${(post.comments || [])
          .map(
            (comment) => `
              <div class="post-comment">
                <strong>${escapeHtml(comment.author)}</strong>
                <span>${escapeHtml(comment.text)}</span>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="comment-form">
        <select data-comment-author="${post.id}" aria-label="Comment author">
          ${state.members.map((member) => `<option value="${escapeHtml(member.name)}">${escapeHtml(member.name)}</option>`).join("")}
        </select>
        <input data-comment-text="${post.id}" placeholder="Add a comment or question" />
        <button class="btn" data-post-comment="${post.id}">Comment</button>
      </div>
      <div class="post-foot">
        <span>${post.likes} useful</span>
        <button data-like-post="${post.id}">Mark useful</button>
      </div>
    </article>
  `;
}

function postTypeLabel(type) {
  return {
    all: "All",
    discussion: "Discussion",
    method: "Method",
    code: "Code",
    palette: "RStudio Palette",
    image: "Image",
    video: "Video",
    audio: "Audio",
    file: "File",
    web: "Web",
    favorite: "Favorite"
  }[type] || "Share";
}

function renderPostMedia(post) {
  const media = normalizePostMedia(post);
  if (!media) return "";
  const name = escapeHtml(media.name || post.title || "Attachment");
  if (!media?.url) {
    if (!media.storageKey) return "";
    return `<div class="post-file is-loading">
      ${icon("file")}
      <span>${name}</span>
    </div>`;
  }
  const url = escapeHtml(media.url);
  if (media.kind === "image") {
    return `<img class="post-media post-image" src="${url}" alt="${escapeHtml(post.title)}" />`;
  }
  if (media.kind === "video") {
    return `<video class="post-media post-video" src="${url}" controls playsinline preload="metadata"></video>`;
  }
  if (media.kind === "audio") {
    return `<audio class="post-audio" src="${url}" controls preload="metadata"></audio>`;
  }
  return `<a class="post-file" href="${url}" target="_blank" rel="noreferrer" download="${name}">
    ${icon("file")}
    <span>${name}</span>
  </a>`;
}

function renderTodayPanel() {
  const unfinished = state.tasks.filter((task) => task.status !== "done");
  const urgent = unfinished.filter((task) => task.priority === "urgent" || daysUntil(task.due) <= 2);
  const transparent = state.projects.filter((project) => project.status === "active").length;
  const completed = state.tasks.filter((task) => task.status === "done").length;

  return `
    <aside class="panel summary-panel">
      <div class="panel-header">
        <div>
          <h2>Today</h2>
          <p>Only what needs attention.</p>
        </div>
      </div>
      <div class="momentum">
        <div class="moment"><strong>${urgent.length}</strong><span>focus</span></div>
        <div class="moment"><strong>${transparent}</strong><span>active</span></div>
        <div class="moment"><strong>${completed}</strong><span>done</span></div>
      </div>
      <div class="task-list">
        ${unfinished
          .sort((a, b) => daysUntil(a.due) - daysUntil(b.due))
          .slice(0, 5)
          .map(renderTaskRow)
          .join("")}
      </div>
    </aside>
  `;
}

function renderBoardPanel(mode = view) {
  const selected = state.projects.find((project) => project.id === selectedProject) || state.projects[0];
  const tasks = filteredTasks().filter((task) => (mode === "project" ? task.projectId === selected.id : true));
  const groups =
    mode === "project"
      ? [
          ["todo", "To do"],
          ["progress", "In progress"],
          ["blocked", "Blocked"],
          ["done", "Done"]
        ]
      : state.members.map((member) => [member.id, member.name]);

  return `
    <section class="panel board">
      <div class="panel-header">
        <div>
          <h2>${mode === "project" ? selected.title : "People workload"}</h2>
          <p>${mode === "project" ? selected.description : "Open work by owner"}</p>
        </div>
      </div>
      <div class="board-toolbar">
        <input class="search" value="${escapeHtml(query)}" placeholder="Search tasks, notes, projects, people" aria-label="Search tasks" />
        ${
          mode === "project"
            ? `<select class="search" data-select-project aria-label="Selected project">
                ${state.projects
                  .map((project) => `<option value="${project.id}" ${project.id === selected.id ? "selected" : ""}>${project.title}</option>`)
                  .join("")}
              </select>`
            : ""
        }
      </div>
      ${
        mode === "project"
          ? `<div class="project-focus">
              <div class="focus-card">
                <h3>${taskProgress(selected.id)}% complete · ${selected.priority} · due ${selected.deadline}</h3>
                <p>${state.activity[0]}</p>
                <div class="progress-track"><div class="progress-fill" style="width: ${taskProgress(selected.id)}%"></div></div>
                <div class="project-edit">
                  <input value="${escapeHtml(selected.title)}" data-project-field="title" aria-label="Project title" />
                  <select data-project-field="status" aria-label="Project status">
                    ${["active", "paused", "completed"].map((status) => `<option value="${status}" ${status === selected.status ? "selected" : ""}>${status}</option>`).join("")}
                  </select>
                  <select data-project-field="priority" aria-label="Project priority">
                    ${["high", "normal", "low"].map((priority) => `<option value="${priority}" ${priority === selected.priority ? "selected" : ""}>${priority}</option>`).join("")}
                  </select>
                  <input type="date" value="${selected.deadline}" data-project-field="deadline" aria-label="Project deadline" />
                </div>
              </div>
            </div>`
          : ""
      }
      <div class="columns">
        ${groups
          .map(([id, label]) => {
            const columnTasks = mode === "project" ? tasks.filter((task) => task.status === id) : tasks.filter((task) => taskHasMember(task, id));
            return `
              <div class="column">
                <h3><span>${label}</span><span>${columnTasks.length}</span></h3>
                ${
                  columnTasks.length
                    ? columnTasks.map(renderTaskRow).join("")
                    : `<div class="empty">Nothing here. That kind of quiet is useful too.</div>`
                }
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderProjectRail() {
  return `
    <aside class="panel nav-panel">
      <div class="panel-header">
        <div>
          <h2>Projects</h2>
          <p>Status</p>
        </div>
      </div>
      <div class="project-list">
        ${state.projects
          .map((project) => {
            const progress = taskProgress(project.id);
            return `
              <button class="project-card ${project.id === selectedProject ? "active-card" : ""}" data-project="${project.id}">
                <div class="project-top">
                  <p class="project-title">${project.title}</p>
                  <span class="pill ${project.status}">${project.status}</span>
                </div>
                <div class="meta">
                  <span class="pill ${project.priority}">${project.priority}</span>
                  <span class="pill">${progress}%</span>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
              </button>
            `;
          })
          .join("")}
      </div>
    </aside>
  `;
}

function renderProjectMenu() {
  if (!projectMenu) return "";
  const project = state.projects.find((item) => item.id === projectMenu.projectId);
  if (!project) return "";
  return `
    <div class="context-menu" style="left: ${projectMenu.x}px; top: ${projectMenu.y}px" role="menu">
      <button data-project-edit="${project.id}" role="menuitem">Edit project</button>
      <button data-project-status="${project.id}:active" role="menuitem">Set active</button>
      <button data-project-status="${project.id}:paused" role="menuitem">Set paused</button>
      <button data-project-complete="${project.id}" role="menuitem">Mark complete</button>
      <button class="danger" data-project-delete="${project.id}" role="menuitem">Delete project</button>
    </div>
  `;
}

function renderTaskMenu() {
  if (!taskMenu) return "";
  const task = state.tasks.find((item) => item.id === taskMenu.taskId);
  if (!task) return "";
  return `
    <div class="context-menu task-context-menu" style="left: ${taskMenu.x}px; top: ${taskMenu.y}px" role="menu">
      <button data-task-open="${task.id}" role="menuitem">Open task</button>
      <button data-task-status="${task.id}:progress" role="menuitem">Mark in progress</button>
      <button data-task-status="${task.id}:done" role="menuitem">Mark done</button>
      <button class="danger" data-task-delete="${task.id}" role="menuitem">Delete task</button>
    </div>
  `;
}

function renderProjectEditor() {
  const project = state.projects.find((item) => item.id === projectEditorId);
  if (!project) return "";
  const progress = taskProgress(project.id);
  return `
    <aside class="drawer open" aria-modal="true" role="dialog">
      <div class="scrim" data-action="close-project-editor"></div>
      <div class="drawer-panel project-editor-panel">
        <div class="drawer-content">
          <div class="drawer-head">
            <div>
              <h2>Edit project</h2>
              <p class="drawer-subtitle">${escapeHtml(project.title)}</p>
            </div>
            <button class="btn icon" data-action="close-project-editor" aria-label="Close">${icon("close")}</button>
          </div>
          <div class="form-grid">
            ${projectField("Project name", "title", project.title, "text", true)}
            ${projectField("Description", "description", project.description, "textarea", true)}
            ${projectSelectField("Status", "status", project.status, [
              ["active", "Active"],
              ["paused", "Paused"],
              ["completed", "Completed"]
            ])}
            ${projectSelectField("Priority", "priority", project.priority, [
              ["high", "High"],
              ["normal", "Normal"],
              ["low", "Low"]
            ])}
            ${projectField("Deadline", "deadline", project.deadline, "date")}
          </div>
          <div class="project-progress-editor">
            <div>
              <h3>Progress</h3>
              <p>${progress}% complete</p>
            </div>
            <input type="range" min="0" max="100" step="5" value="${progress}" data-project-field="progressOverride" aria-label="Project progress" />
            <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
          </div>
          <div class="editor-actions">
            <button class="btn primary" data-project-complete="${project.id}">Mark complete</button>
            <button class="btn danger" data-project-delete="${project.id}">Delete project</button>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function renderPeopleRail() {
  return `
    <aside class="panel nav-panel">
      <div class="people-groups">
        ${roleGroups()
          .map(
            ([role, members]) => `
              <section class="role-group" data-role="${role}">
                <h3 data-role-title="${role}">${role}</h3>
                <div class="people-list">
                  ${
                    members.length
                      ? members
                          .map((member) => {
                            const tasks = state.tasks.filter((task) => taskHasMember(task, member.id) && task.status !== "done");
                            const urgent = tasks.filter((task) => task.priority === "urgent" || task.status === "blocked").length;
                            return `
                              <button class="person-card ${member.id === selectedPerson ? "active-card" : ""}" data-person="${member.id}" data-person-role="${role}">
                                <div class="person-top">
                                  <p class="person-name">${escapeHtml(member.name)}</p>
                                  <span class="pill ${urgent ? "urgent" : "done"}">${tasks.length}</span>
                                </div>
                              </button>
                            `;
                          })
                          .join("")
                      : `<button class="person-card empty-person" data-empty-role="${role}">Add ${escapeHtml(role)}</button>`
                  }
                </div>
              </section>
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}

function renderPeopleMenu() {
  if (!peopleMenu) return "";
  const person = peopleMenu.personId ? state.members.find((member) => member.id === peopleMenu.personId) : null;
  return `
    <div class="context-menu" style="left: ${peopleMenu.x}px; top: ${peopleMenu.y}px" role="menu">
      <button data-menu-add="${escapeHtml(peopleMenu.role)}" role="menuitem">Add ${escapeHtml(peopleMenu.role)}</button>
      ${
        person
          ? `<button class="danger" data-menu-delete="${person.id}" role="menuitem">Delete ${escapeHtml(person.name)}</button>`
          : ""
      }
    </div>
  `;
}

function renderTaskRow(task) {
  return `
    <button class="task-row" data-task="${task.id}" title="Right-click for task actions">
      <div class="row-top">
        <p class="row-title">${escapeHtml(task.title)}</p>
        <span class="due">${dueLabel(task.due)}</span>
      </div>
      <p class="row-note">${escapeHtml(task.notes)}</p>
      <div class="meta">
        <span class="pill ${task.priority}">${task.priority}</span>
        <span class="pill ${task.status}">${statusText(task.status)}</span>
        <span class="pill participant-pill" title="${escapeHtml(participantNames(task))}">${escapeHtml(participantSummary(task))}</span>
        <span class="pill">${escapeHtml(projectTitle(task.projectId))}</span>
      </div>
    </button>
  `;
}

function renderTaskLine(task) {
  return `
    <div class="task-line">
      <button class="task-line-main" data-task="${task.id}" title="Right-click for task actions">
        <span>
          <strong>${escapeHtml(task.title)}</strong>
          <small title="${escapeHtml(participantNames(task))}">${escapeHtml(projectTitle(task.projectId))} · ${escapeHtml(participantSummary(task))} · due ${escapeHtml(task.due)}</small>
        </span>
        <span class="line-meta">
          <span class="pill ${task.priority}">${task.priority}</span>
          <span class="pill ${task.status}">${statusText(task.status)}</span>
        </span>
      </button>
      <button class="task-delete" data-delete-task="${task.id}" aria-label="Delete task ${escapeHtml(task.title)}" title="Delete task">
        ${icon("trash")}
      </button>
    </div>
  `;
}

function renderDrawer() {
  const task = state.tasks.find((item) => item.id === activeTaskId);
  if (!task) return `<div class="drawer" aria-hidden="true"></div>`;
  return `
    <aside class="drawer open" aria-modal="true" role="dialog">
      <div class="scrim" data-action="close"></div>
      <div class="drawer-panel">
        <div class="drawer-content">
          <div class="drawer-head">
            <h2>${task.title}</h2>
            <button class="btn icon" data-action="close" aria-label="Close">${icon("close")}</button>
          </div>
          <div class="form-grid">
            ${field("Title", "title", task.title, "text", true)}
            ${selectField("Project", "projectId", task.projectId, state.projects.map((project) => [project.id, project.title]))}
            ${renderParticipantPicker(task)}
            ${selectField("Status", "status", task.status, [
              ["todo", "To do"],
              ["progress", "In progress"],
              ["blocked", "Blocked"],
              ["done", "Done"]
            ])}
            ${selectField("Priority", "priority", task.priority, [
              ["urgent", "Urgent"],
              ["high", "High"],
              ["normal", "Normal"],
              ["low", "Low"]
            ])}
            ${field("Due date", "due", task.due, "date")}
            ${field("Notes", "notes", task.notes, "textarea", true)}
          </div>
          <h3 class="section-title">Checklist</h3>
          <div class="checklist">
            ${task.checklist
              .map(
                (item, index) => `
                  <label class="check-item">
                    <input type="checkbox" data-check="${index}" ${item.done ? "checked" : ""} />
                    <span>${item.text}</span>
                  </label>
                `
              )
              .join("")}
          </div>
          <div class="inline-add">
            <input data-new-check placeholder="Add checklist item" />
            <button class="btn" data-action="add-check">Add</button>
          </div>
          <h3 class="section-title">Comments</h3>
          <div class="comments">
            ${task.comments
              .map(
                (comment) => `
                  <div class="comment">
                    <strong>${comment.author}</strong>
                    <p>${comment.text}</p>
                  </div>
                `
              )
              .join("") || `<div class="empty">No comments yet. Leave the next small signal.</div>`}
          </div>
          <div class="inline-add">
            <input data-new-comment placeholder="Add progress note or blocker" />
            <button class="btn" data-action="add-comment">Post</button>
          </div>
          <h3 class="section-title">Attachments</h3>
          <div class="attachments">
            ${task.attachments.map((name) => `<div class="attachment">${icon("file")} <span>${name}</span></div>`).join("") || `<div class="empty">No attachments recorded yet.</div>`}
          </div>
          <div class="inline-add">
            <input data-new-attachment placeholder="Paste file name or link" />
            <button class="btn" data-action="add-attachment">Attach</button>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function field(label, key, value, type = "text", full = false) {
  const control =
    type === "textarea"
      ? `<textarea data-field="${key}">${escapeHtml(value)}</textarea>`
      : `<input type="${type}" value="${escapeHtml(value)}" data-field="${key}" />`;
  return `<label class="field ${full ? "full" : ""}"><span>${label}</span>${control}</label>`;
}

function projectField(label, key, value, type = "text", full = false) {
  const control =
    type === "textarea"
      ? `<textarea data-project-field="${key}">${escapeHtml(value)}</textarea>`
      : `<input type="${type}" value="${escapeHtml(value)}" data-project-field="${key}" />`;
  return `<label class="field ${full ? "full" : ""}"><span>${label}</span>${control}</label>`;
}

function projectSelectField(label, key, value, options) {
  return `
    <label class="field">
      <span>${label}</span>
      <select data-project-field="${key}">
        ${options.map(([id, text]) => `<option value="${id}" ${id === value ? "selected" : ""}>${text}</option>`).join("")}
      </select>
    </label>
  `;
}

function selectField(label, key, value, options) {
  return `
    <label class="field">
      <span>${label}</span>
      <select data-field="${key}">
        ${key === "assignee" ? `<option value="" ${value === "" ? "selected" : ""}>Unassigned</option>` : ""}
        ${options.map(([id, text]) => `<option value="${id}" ${id === value ? "selected" : ""}>${text}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderParticipantPicker(task) {
  const selectedIds = taskAssigneeIds(task);
  return `
    <fieldset class="field participant-field full">
      <legend>Participants</legend>
      <div class="participant-grid">
        ${state.members
          .map(
            (member) => `
              <label class="participant-option">
                <input type="checkbox" data-participant="${member.id}" ${selectedIds.includes(member.id) ? "checked" : ""} />
                <span>${escapeHtml(member.name)}</span>
              </label>
            `
          )
          .join("")}
      </div>
    </fieldset>
  `;
}

function filteredTasks() {
  const text = query.trim().toLowerCase();
  if (!text) return state.tasks;
  return state.tasks.filter((task) => {
    const haystack = [task.title, task.notes, participantNames(task), projectTitle(task.projectId), task.status, task.priority].join(" ").toLowerCase();
    return haystack.includes(text);
  });
}

function statusText(status) {
  return {
    todo: "to do",
    progress: "in progress",
    blocked: "blocked",
    done: "done"
  }[status];
}

function bindEvents() {
  document.querySelectorAll("[data-task]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTaskId = button.dataset.task;
      taskMenu = null;
      render();
    });

    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openTaskMenu(event, button.dataset.task);
    });
  });

  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedProject = button.dataset.project;
      view = "project";
      currentTab = "projects";
      projectMenu = null;
      taskMenu = null;
      render();
    });

    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      selectedProject = button.dataset.project;
      openProjectMenu(event, button.dataset.project);
    });
  });

  document.querySelectorAll("[data-person]").forEach((button) => {
    button.addEventListener("click", () => {
      view = "people";
      currentTab = "people";
      selectedPerson = button.dataset.person;
      query = "";
      peopleMenu = null;
      taskMenu = null;
      render();
    });

    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      selectedPerson = button.dataset.person;
      openPeopleMenu(event, button.dataset.personRole, button.dataset.person);
    });
  });

  document.querySelectorAll("[data-role], [data-role-title], [data-empty-role]").forEach((node) => {
    node.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const role = node.dataset.role || node.dataset.roleTitle || node.dataset.emptyRole;
      openPeopleMenu(event, role, null);
    });
  });

  document.querySelectorAll("[data-empty-role]").forEach((button) => {
    button.addEventListener("click", () => addPersonToRole(button.dataset.emptyRole));
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      currentTab = button.dataset.tab;
      query = "";
      peopleMenu = null;
      projectMenu = null;
      taskMenu = null;
      if (currentTab === "projects") view = "project";
      if (currentTab === "people") view = "people";
      render();
    });
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      view = button.dataset.view;
      query = "";
      taskMenu = null;
      render();
    });
  });

  document.querySelectorAll("[data-community-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      communityFilter = button.dataset.communityFilter;
      render();
    });
  });

  document.querySelector(".search")?.addEventListener("input", (event) => {
    query = event.target.value;
    render();
  });

  document.querySelector("[data-select-project]")?.addEventListener("change", (event) => {
    selectedProject = event.target.value;
    taskMenu = null;
    render();
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  document.querySelectorAll("[data-menu-add]").forEach((button) => {
    button.addEventListener("click", () => addPersonToRole(button.dataset.menuAdd));
  });

  document.querySelectorAll("[data-menu-delete]").forEach((button) => {
    button.addEventListener("click", () => deletePerson(button.dataset.menuDelete));
  });

  document.querySelectorAll("[data-project-edit]").forEach((button) => {
    button.addEventListener("click", () => openProjectEditor(button.dataset.projectEdit));
  });

  document.querySelectorAll("[data-project-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const [projectId, status] = button.dataset.projectStatus.split(":");
      updateProjectStatus(projectId, status);
    });
  });

  document.querySelectorAll("[data-project-complete]").forEach((button) => {
    button.addEventListener("click", () => completeProject(button.dataset.projectComplete));
  });

  document.querySelectorAll("[data-project-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteProject(button.dataset.projectDelete));
  });

  document.querySelectorAll("[data-task-open]").forEach((button) => {
    button.addEventListener("click", () => openTaskFromMenu(button.dataset.taskOpen));
  });

  document.querySelectorAll("[data-task-status]").forEach((button) => {
    button.addEventListener("click", () => {
      const [taskId, status] = button.dataset.taskStatus.split(":");
      updateTaskStatusFromMenu(taskId, status);
    });
  });

  document.querySelectorAll("[data-task-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteTaskFromMenu(button.dataset.taskDelete));
  });

  document.addEventListener("click", closeAllMenus, { once: true });

  document.querySelectorAll("[data-field]").forEach((fieldNode) => {
    fieldNode.addEventListener("change", (event) => updateTaskField(event.target.dataset.field, event.target.value));
  });

  document.querySelectorAll("[data-participant]").forEach((fieldNode) => {
    fieldNode.addEventListener("change", (event) => updateTaskParticipant(event.target.dataset.participant, event.target.checked));
  });

  document.querySelectorAll("[data-project-field]").forEach((fieldNode) => {
    fieldNode.addEventListener("change", (event) => updateProjectField(event.target.dataset.projectField, event.target.value));
  });

  document.querySelectorAll("[data-meeting-link]").forEach((fieldNode) => {
    fieldNode.addEventListener("change", (event) => updateMeetingLink(event.target.dataset.meetingLink, event.target.value));
  });

  document.querySelectorAll("[data-open-meeting]").forEach((button) => {
    button.addEventListener("click", () => openMeeting(button.dataset.openMeeting));
  });

  document.querySelectorAll("[data-check]").forEach((check) => {
    check.addEventListener("change", (event) => {
      const task = activeTask();
      task.checklist[Number(event.target.dataset.check)].done = event.target.checked;
      saveState("Checklist updated");
    });
  });

  document.querySelectorAll("[data-delete-task]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTask(button.dataset.deleteTask);
    });
  });

  document.querySelectorAll("[data-save-post]").forEach((button) => {
    button.addEventListener("click", () => togglePostSaved(button.dataset.savePost));
  });

  document.querySelectorAll("[data-like-post]").forEach((button) => {
    button.addEventListener("click", () => markPostUseful(button.dataset.likePost));
  });

  document.querySelectorAll("[data-post-comment]").forEach((button) => {
    button.addEventListener("click", () => addPostComment(button.dataset.postComment));
  });
}

function openPeopleMenu(event, role, personId) {
  const menuWidth = 190;
  const menuHeight = personId ? 92 : 48;
  peopleMenu = {
    role,
    personId,
    x: Math.min(event.clientX, window.innerWidth - menuWidth - 8),
    y: Math.min(event.clientY, window.innerHeight - menuHeight - 8)
  };
  projectMenu = null;
  taskMenu = null;
  render();
}

function openProjectMenu(event, projectId) {
  const menuWidth = 190;
  const menuHeight = 190;
  projectMenu = {
    projectId,
    x: Math.min(event.clientX, window.innerWidth - menuWidth - 8),
    y: Math.min(event.clientY, window.innerHeight - menuHeight - 8)
  };
  peopleMenu = null;
  taskMenu = null;
  render();
}

function openTaskMenu(event, taskId) {
  const menuWidth = 190;
  const menuHeight = 146;
  taskMenu = {
    taskId,
    x: Math.min(event.clientX, window.innerWidth - menuWidth - 8),
    y: Math.min(event.clientY, window.innerHeight - menuHeight - 8)
  };
  peopleMenu = null;
  projectMenu = null;
  render();
}

function closeAllMenus() {
  if (!peopleMenu && !projectMenu && !taskMenu) return;
  peopleMenu = null;
  projectMenu = null;
  taskMenu = null;
  render();
}

function handleAction(action) {
  if (action === "close") {
    activeTaskId = null;
    render();
  }
  if (action === "close-project-editor") {
    projectEditorId = null;
    render();
  }
  if (action === "new-task") {
    const projectId = selectedProject || state.projects[0].id;
    const task = {
      id: `t${Date.now()}`,
      projectId,
      title: "New lab task",
      assignee: state.members[0]?.id || "",
      assignees: state.members[0]?.id ? [state.members[0].id] : [],
      status: "todo",
      priority: "normal",
      due: "2026-09-06",
      notes: "Add the next concrete step.",
      checklist: [],
      comments: [],
      attachments: []
    };
    state.tasks.unshift(task);
    activeTaskId = task.id;
    saveState("Task created");
  }
  if (action === "reset") {
    state = structuredClone(seed);
    selectedProject = state.projects[0].id;
    selectedPerson = state.members[0].id;
    view = "project";
    currentTab = "today";
    activeTaskId = null;
    query = "";
    communityFilter = "all";
    saveState("Sample data restored");
  }
  if (action === "add-person-task") addPersonTask();
  if (action === "add-community-post") void addCommunityPost();
  if (action === "add-check") addChecklist();
  if (action === "add-comment") addComment();
  if (action === "add-attachment") addAttachment();
}

function activeTask() {
  return state.tasks.find((task) => task.id === activeTaskId);
}

function updateTaskField(key, value) {
  const task = activeTask();
  if (!task) return;
  task[key] = value;
  if (key === "assignee") task.assignees = value ? [value] : [];
  saveState("Task updated");
}

function updateTaskParticipant(memberId, checked) {
  const task = activeTask();
  if (!task) return;
  const ids = new Set(taskAssigneeIds(task));
  if (checked) {
    ids.add(memberId);
  } else {
    ids.delete(memberId);
  }
  task.assignees = [...ids];
  task.assignee = task.assignees[0] || "";
  saveState("Participants updated");
}

function updateProjectField(key, value) {
  const project = state.projects.find((item) => item.id === selectedProject);
  if (!project) return;
  project[key] = key === "progressOverride" ? Number(value) : value;
  saveState("Project updated");
}

function openProjectEditor(projectId) {
  projectEditorId = projectId;
  projectMenu = null;
  activeTaskId = null;
  render();
}

function updateProjectStatus(projectId, status) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  project.status = status;
  if (status === "completed") {
    completeProject(projectId, false);
    return;
  }
  projectMenu = null;
  saveState(`Project set to ${status}`);
}

function completeProject(projectId, shouldConfirm = true) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  if (shouldConfirm && !window.confirm(`Mark ${project.title} complete? In-progress tasks will move to done.`)) {
    projectMenu = null;
    render();
    return;
  }
  project.status = "completed";
  project.progressOverride = 100;
  state.tasks = state.tasks.map((task) => (task.projectId === projectId && task.status === "progress" ? { ...task, status: "done" } : task));
  projectMenu = null;
  saveState(`${project.title} completed`);
}

function deleteProject(projectId) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  if (state.projects.length === 1) {
    projectMenu = null;
    showToast("Keep at least one project");
    return;
  }
  const taskCount = state.tasks.filter((task) => task.projectId === projectId).length;
  const ok = window.confirm(`Delete ${project.title}? This will remove ${taskCount} related task${taskCount === 1 ? "" : "s"}.`);
  if (!ok) {
    projectMenu = null;
    render();
    return;
  }
  state.projects = state.projects.filter((item) => item.id !== projectId);
  state.tasks = state.tasks.filter((task) => task.projectId !== projectId);
  selectedProject = state.projects[0]?.id || "";
  projectEditorId = null;
  projectMenu = null;
  saveState(`${project.title} deleted`);
}

function updateMeetingLink(meetingId, value) {
  const meeting = state.meetings.find((item) => item.id === meetingId);
  if (!meeting) return;
  meeting.link = value.trim();
  saveState("Meeting link saved");
}

function openMeeting(meetingId) {
  const meeting = state.meetings.find((item) => item.id === meetingId);
  if (!meeting?.link) return;
  window.open(meeting.link, "_blank", "noreferrer");
}

function addPersonTask() {
  const person = state.members.find((member) => member.id === selectedPerson) || state.members[0];
  const title = document.querySelector("[data-person-task-title]")?.value.trim();
  const projectId = document.querySelector("[data-person-task-project]")?.value || selectedProject || state.projects[0].id;
  const priority = document.querySelector("[data-person-task-priority]")?.value || "normal";
  const due = document.querySelector("[data-person-task-due]")?.value || "2026-09-06";
  if (!title) {
    showToast("Add a task title first");
    return;
  }
  const task = {
    id: `t${Date.now()}`,
    projectId,
    title,
    assignee: person.id,
    assignees: [person.id],
    status: "todo",
    priority,
    due,
    notes: "",
    checklist: [],
    comments: [],
    attachments: []
  };
  state.tasks.unshift(task);
  selectedProject = projectId;
  saveState(`Task added for ${person.name}`);
}

function addPersonToRole(role) {
  if (!role) return;
  const name = window.prompt(`Add ${role} member`);
  const cleanName = name?.trim();
  if (!cleanName) {
    peopleMenu = null;
    render();
    return;
  }
  const id = uniqueMemberId(cleanName);
  state.members.push({ id, name: cleanName, role });
  selectedPerson = id;
  currentTab = "people";
  peopleMenu = null;
  saveState(`${cleanName} added`);
}

function deletePerson(personId) {
  const person = state.members.find((member) => member.id === personId);
  if (!person) return;
  const ok = window.confirm(`Delete ${person.name}? Their tasks will stay, but become Unassigned.`);
  if (!ok) {
    peopleMenu = null;
    render();
    return;
  }
  state.members = state.members.filter((member) => member.id !== personId);
  state.projects = state.projects.map((project) => ({
    ...project,
    members: project.members.filter((memberId) => memberId !== personId)
  }));
  state.tasks = state.tasks.map((task) => {
    const assignees = taskAssigneeIds(task).filter((memberId) => memberId !== personId);
    return {
      ...task,
      assignee: assignees[0] || "",
      assignees
    };
  });
  selectedPerson = state.members[0]?.id || "";
  peopleMenu = null;
  saveState(`${person.name} deleted`);
}

function uniqueMemberId(name) {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "member";
  let id = base;
  let index = 2;
  while (state.members.some((member) => member.id === id)) {
    id = `${base}-${index}`;
    index += 1;
  }
  return id;
}

async function addCommunityPost() {
  const title = document.querySelector("[data-post-title]")?.value.trim();
  const type = document.querySelector("[data-post-type]")?.value || "discussion";
  const author = document.querySelector("[data-post-author]")?.value || "Lab member";
  const body = document.querySelector("[data-post-body]")?.value.trim();
  const link = document.querySelector("[data-post-link]")?.value.trim();
  const code = document.querySelector("[data-post-code]")?.value.trim();
  const file = document.querySelector("[data-post-media]")?.files?.[0];
  if (!title || !body) {
    showToast("Add a title and note first");
    return;
  }

  let media = null;
  let postLink = link;
  try {
    if (file) {
      const storageKey = `media-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      if (typeof indexedDB === "undefined") {
        if (file.size > 2_000_000) {
          showToast("Use a link for larger files");
          return;
        }
        media = {
          kind: mediaKindFromFile(file),
          url: await readFileAsDataUrl(file),
          name: file.name
        };
      } else {
        await storeMediaBlob(storageKey, file);
        storedMediaUrls.set(storageKey, URL.createObjectURL(file));
        media = {
          kind: mediaKindFromFile(file),
          storageKey,
          name: file.name
        };
      }
    }
  } catch {
    showToast("Could not attach this file");
    return;
  }

  if (!file && link) {
    const linkMediaKind = mediaKindFromUrl(link, type);
    const isMediaPost = ["image", "video", "audio", "file"].includes(type) || linkMediaKind !== "link";
    if (isMediaPost) {
      media = { kind: linkMediaKind === "link" ? "file" : linkMediaKind, url: link, name: title };
      postLink = ["web", "favorite"].includes(type) ? link : "";
    }
  }

  const post = {
    id: `c${Date.now()}`,
    type,
    title,
    author,
    body,
    link: postLink,
    code,
    image: media?.kind === "image" ? media.url : "",
    media,
    saved: false,
    likes: 0,
    created: new Date().toISOString().slice(0, 10),
    comments: []
  };
  state.community.unshift(post);
  state.activity.unshift(`${author} shared ${title}.`);
  saveState("Post published");
}

function mediaKindFromFile(file) {
  if (file.type.startsWith("image/")) return "image";
  if (file.type.startsWith("video/")) return "video";
  if (file.type.startsWith("audio/")) return "audio";
  return "file";
}

function mediaKindFromUrl(url, fallback = "") {
  const path = url.split("?")[0].split("#")[0].toLowerCase();
  if (/\.(apng|avif|gif|jpe?g|png|svg|webp)$/.test(path)) return "image";
  if (/\.(m4v|mov|mp4|ogv|webm)$/.test(path)) return "video";
  if (/\.(aac|aiff|flac|m4a|mp3|oga|ogg|wav)$/.test(path)) return "audio";
  if (fallback === "image" || fallback === "video" || fallback === "audio" || fallback === "file") return fallback;
  return "link";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function openMediaDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MEDIA_DB_NAME, 1);
    request.addEventListener("upgradeneeded", () => {
      if (!request.result.objectStoreNames.contains(MEDIA_STORE_NAME)) {
        request.result.createObjectStore(MEDIA_STORE_NAME, { keyPath: "id" });
      }
    });
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function storeMediaBlob(id, file) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(MEDIA_STORE_NAME, "readwrite");
    transaction.objectStore(MEDIA_STORE_NAME).put({
      id,
      blob: file,
      type: file.type,
      name: file.name,
      updated: Date.now()
    });
    transaction.addEventListener("complete", resolve);
    transaction.addEventListener("error", () => reject(transaction.error));
  });
}

async function loadMediaBlob(id) {
  const db = await openMediaDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(MEDIA_STORE_NAME, "readonly").objectStore(MEDIA_STORE_NAME).get(id);
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error));
  });
}

async function hydrateStoredMedia() {
  if (typeof indexedDB === "undefined") return;
  const keys = [
    ...new Set(
      (state.community || [])
        .map((post) => post.media?.storageKey)
        .filter((storageKey) => storageKey && !storedMediaUrls.has(storageKey))
    )
  ];
  if (!keys.length) return;

  const records = await Promise.all(
    keys.map(async (storageKey) => {
      try {
        return [storageKey, await loadMediaBlob(storageKey)];
      } catch {
        return [storageKey, null];
      }
    })
  );
  const loaded = records.filter(([, record]) => record?.blob);
  loaded.forEach(([storageKey, record]) => {
    storedMediaUrls.set(storageKey, URL.createObjectURL(record.blob));
  });
  if (loaded.length) render();
}

function togglePostSaved(postId) {
  const post = state.community.find((item) => item.id === postId);
  if (!post) return;
  post.saved = !post.saved;
  saveState(post.saved ? "Saved to community" : "Removed from saved");
}

function markPostUseful(postId) {
  const post = state.community.find((item) => item.id === postId);
  if (!post) return;
  post.likes += 1;
  saveState("Marked useful");
}

function addPostComment(postId) {
  const post = state.community.find((item) => item.id === postId);
  if (!post) return;
  const author = document.querySelector(`[data-comment-author="${postId}"]`)?.value || "Lab member";
  const text = document.querySelector(`[data-comment-text="${postId}"]`)?.value.trim();
  if (!text) {
    showToast("Add a comment first");
    return;
  }
  post.comments = Array.isArray(post.comments) ? post.comments : [];
  post.comments.push({ author, text });
  saveState("Comment added");
}

function deleteTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  state.tasks = state.tasks.filter((item) => item.id !== taskId);
  if (activeTaskId === taskId) activeTaskId = null;
  taskMenu = null;
  saveState(task ? `Deleted ${task.title}` : "Task deleted");
}

function openTaskFromMenu(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  activeTaskId = taskId;
  taskMenu = null;
  render();
}

function updateTaskStatusFromMenu(taskId, status) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.status = status;
  taskMenu = null;
  saveState(status === "done" ? "Task marked done" : "Task updated");
}

function deleteTaskFromMenu(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  const ok = window.confirm(`Delete ${task.title}?`);
  if (!ok) {
    taskMenu = null;
    render();
    return;
  }
  deleteTask(taskId);
}

function addChecklist() {
  const input = document.querySelector("[data-new-check]");
  const text = input?.value.trim();
  if (!text) return;
  activeTask().checklist.push({ text, done: false });
  saveState("Checklist item added");
}

function addComment() {
  const input = document.querySelector("[data-new-comment]");
  const text = input?.value.trim();
  if (!text) return;
  activeTask().comments.push({ author: "Lab member", text });
  saveState("Comment posted");
}

function addAttachment() {
  const input = document.querySelector("[data-new-attachment]");
  const text = input?.value.trim();
  if (!text) return;
  activeTask().attachments.push(text);
  saveState("Attachment recorded");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1500);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

render();
void hydrateStoredMedia();
