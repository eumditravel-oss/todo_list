const STORAGE_KEY = "claim-center-pilot-tasks-v1";

const taskGroups = [
  {
    id: "scope",
    priority: "P0",
    title: "오늘 확정해야 하는 오픈 기준",
    description: "기능 추가를 멈추고 월요일 파일럿의 경계를 고정합니다.",
    tasks: [
      { id: "scope-1", title: "8월 31일(월)을 파일럿 오픈일로 확정", owner: "경영진 · 박용진", due: "오늘", urgent: true },
      { id: "scope-2", title: "파일럿 사용자를 최 본부장·임경호 센터장·장 실장·관리자로 제한", owner: "경영진", due: "오늘", urgent: true },
      { id: "scope-3", title: "의뢰·제안·수주·일정·자료·검토·저장까지 1차 오픈 범위 동결", owner: "박용진 · 실무진", due: "오늘", urgent: true },
      { id: "scope-4", title: "HWP 직접 편집·메일 회신 추적·법원 고도화 연동은 오픈 이후로 분리", owner: "박용진", due: "오늘", urgent: true },
    ],
  },
  {
    id: "accounts",
    priority: "P0",
    title: "계정·결제·저장소 선결사항",
    description: "실제 AI 생성과 자료 저장 테스트를 막고 있는 운영 조건입니다.",
    tasks: [
      { id: "account-1", title: "클레임 센터에서 사용할 회사 Google 계정 확정", owner: "경영지원 · 상무", due: "오늘", urgent: true },
      { id: "account-2", title: "Google Drive 용량과 사용자별·프로젝트별 접근 권한 확정", owner: "경영지원 · 박용진", due: "08.26", urgent: true },
      { id: "account-3", title: "OpenAI·Gemini·Anthropic API 결제용 회사 카드 확정", owner: "경영지원 · 상무", due: "오늘", urgent: true },
      { id: "account-4", title: "필요한 유료 서비스와 월 예상비용 목록 작성", owner: "박용진 · 경영지원", due: "08.26" },
      { id: "account-5", title: "분산된 구독 결제수단과 관리 담당자 통일", owner: "경영지원", due: "08.26" },
      { id: "account-6", title: "현재 서버·클라우드·AI 서비스 전체 비용 함께 정리", owner: "경영지원 · 서버 담당", due: "08.27" },
    ],
  },
  {
    id: "blockers",
    priority: "P0",
    title: "오픈을 막는 치명적 오류",
    description: "신규 기능보다 먼저 정상화해야 하는 핵심 연결과 저장 문제입니다.",
    tasks: [
      { id: "bug-1", title: "회의록·녹취록 업로드 후 의뢰 내용 자동 작성 오류 수정", owner: "박용진 · 개발", due: "08.26", urgent: true },
      { id: "bug-2", title: "제안서 확정 후 수주 접수 단계로 넘어가지 않는 오류 수정", owner: "박용진 · 개발", due: "08.26", urgent: true },
      { id: "bug-3", title: "수주 확정 후 프로젝트 일정표 연결 오류 수정", owner: "박용진 · 개발", due: "08.27", urgent: true },
      { id: "bug-4", title: "일정표와 개별 업무 단계 날짜 연동 오류 수정", owner: "박용진 · 개발", due: "08.27" },
      { id: "bug-5", title: "Google Drive 업로드 및 프로젝트별 폴더 자동 생성 검증", owner: "박용진 · 개발", due: "08.27", urgent: true },
      { id: "bug-6", title: "Studio 자료 목록과 실제 Drive 파일 연결 확인", owner: "박용진 · 개발", due: "08.27" },
      { id: "bug-7", title: "유료 API 연결 후 제안서 초안 생성 확인", owner: "박용진", due: "08.27", urgent: true },
      { id: "bug-8", title: "보고서 목차와 챕터 초안 생성 여부 확인", owner: "박용진 · 실무진", due: "08.28" },
      { id: "bug-9", title: "사용자 권한별 화면과 관리자 전용 메뉴 노출 검증", owner: "박용진 · 개발", due: "08.28", urgent: true },
    ],
  },
  {
    id: "e2e",
    priority: "P1",
    title: "완료 프로젝트 1건 원사이클 테스트",
    description: "실제 종료 프로젝트를 사용해 의뢰부터 납품까지 전 단계를 통과시킵니다.",
    tasks: [
      { id: "e2e-1", title: "테스트에 사용할 완료 프로젝트 1건 선정", owner: "최 본부장 · 임 센터장", due: "08.26", urgent: true },
      { id: "e2e-2", title: "의뢰 내용과 녹취록 등록", owner: "박용진 · 장 실장", due: "08.27" },
      { id: "e2e-3", title: "프로젝트 유형과 제안서 템플릿 선택 후 초안 생성", owner: "장 실장", due: "08.27" },
      { id: "e2e-4", title: "검토자 2명 이상 지정하고 의견·수정·승인 과정 실행", owner: "장 실장 · 검토자", due: "08.28" },
      { id: "e2e-5", title: "수주 확정과 PM 지정", owner: "관리자", due: "08.28" },
      { id: "e2e-6", title: "착수회의·현장조사·산출·보고서 일정 등록", owner: "PM", due: "08.28" },
      { id: "e2e-7", title: "접수 자료·회의록·산출 자료 업로드", owner: "PM · 실무진", due: "08.28" },
      { id: "e2e-8", title: "보고서 초안 생성과 수정", owner: "실무진", due: "08.28" },
      { id: "e2e-9", title: "최종본 업로드와 납품 처리", owner: "PM · 승인자", due: "08.28" },
      { id: "e2e-10", title: "각 단계 상태와 이력이 대시보드에 표시되는지 최종 확인", owner: "박용진 · 실무진", due: "08.28", urgent: true },
    ],
  },
  {
    id: "approval",
    priority: "P1",
    title: "검토·승인 핑퐁 기능",
    description: "누가 검토 중이고 어떤 파일이 최종본인지 명확하게 관리합니다.",
    tasks: [
      { id: "approval-1", title: "제안서와 보고서에 동일한 검토 절차 적용", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-2", title: "PM이 검토자 2명 이상을 선택할 수 있도록 구현", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-3", title: "검토 요청 알림과 검토자별 의견 작성 기능 확인", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-4", title: "담당자에게 수정 요청을 반환하는 흐름 구현", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-5", title: "재검토 및 최종 승인 상태 구현", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-6", title: "버전·수정자·수정일시·최종본 표시", owner: "박용진 · 개발", due: "08.28" },
      { id: "approval-7", title: "회의록 작성 여부를 확인하는 결재·상신 상태 추가", owner: "박용진 · 개발", due: "파일럿 후" },
    ],
  },
  {
    id: "files",
    priority: "P1",
    title: "자료실 최소 관리기능",
    description: "업로드 이력과 원본 위치를 Studio 안에서 바로 확인할 수 있게 합니다.",
    tasks: [
      { id: "file-1", title: "Studio에서 업로드된 파일 목록 확인", owner: "박용진 · 개발", due: "08.28" },
      { id: "file-2", title: "업로드 날짜·업로더·자료 종류 표시", owner: "박용진 · 개발", due: "08.28" },
      { id: "file-3", title: "해당 Google Drive 프로젝트 폴더 바로 열기", owner: "박용진 · 개발", due: "08.28" },
      { id: "file-4", title: "담당 프로젝트 자료의 삭제·정정 권한 설정", owner: "박용진 · PM", due: "파일럿 후" },
      { id: "file-5", title: "동일 파일명·동일 용량 업로드 시 중복 경고", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "file-6", title: "중복 의심 자료는 자동 삭제하지 않고 사용자 확인 후 처리", owner: "PM · 실무진", due: "운영 원칙" },
      { id: "file-7", title: "여러 차례 받은 자료도 수령일 기준으로 이력 유지", owner: "PM · 실무진", due: "운영 원칙" },
    ],
  },
  {
    id: "later",
    priority: "P2",
    title: "파일럿 이후 고도화",
    description: "실제 사용 피드백과 최종 데이터가 쌓인 뒤 순차적으로 개발합니다.",
    tasks: [
      { id: "later-1", title: "HWP·Word 파일 내보내기와 가져오기 안정화", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-2", title: "수정 문서 재업로드 시 목차와 챕터 자동 재구성", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-3", title: "Studio 안에서 Word·HWP를 팝업으로 직접 편집", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-4", title: "최종본을 기반으로 회사 보고서 스타일 학습", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-5", title: "내역서·산출서·현장조사 자료를 읽어 보고서에 반영", owner: "박용진 · 실무진", due: "파일럿 후" },
      { id: "later-6", title: "제안서 이메일 발송과 기본 참조·숨은참조 설정", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-7", title: "메일 발송기록·열람·회신 확인", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-8", title: "법원 사건과 소송 일정 연동 고도화", owner: "박용진 · 클레임팀", due: "파일럿 후" },
      { id: "later-9", title: "메뉴 접기·좌측 카테고리 간소화·색상 등 UI 개선", owner: "박용진 · 개발", due: "파일럿 후" },
      { id: "later-10", title: "ERP 프로젝트 현황과 양방향 연동", owner: "박용진 · 개발", due: "파일럿 후" },
    ],
  },
];

const state = {
  completed: loadCompleted(),
  filter: "all",
  query: "",
  hideCompleted: false,
};

const groupsRoot = document.querySelector("#task-groups");
const emptyState = document.querySelector("#empty-state");
const progressBar = document.querySelector("#progress-bar");
const progressPercent = document.querySelector("#progress-percent");
const completedCount = document.querySelector("#completed-count");
const remainingCount = document.querySelector("#remaining-count");
const criticalCount = document.querySelector("#critical-count");
const saveStatus = document.querySelector("#save-status");

function loadCompleted() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function persistCompleted() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completed]));
  saveStatus.textContent = "저장 완료";
  window.setTimeout(() => { saveStatus.textContent = "개인 체크 자동 저장"; }, 1200);
}

function allTasks() {
  return taskGroups.flatMap((group) => group.tasks.map((task) => ({ ...task, priority: group.priority })));
}

function taskMatches(task, group) {
  const filterMatches = state.filter === "all" || group.priority === state.filter;
  const text = `${task.title} ${task.owner} ${task.due} ${group.title}`.toLocaleLowerCase("ko");
  const queryMatches = !state.query || text.includes(state.query);
  const completionMatches = !state.hideCompleted || !state.completed.has(task.id);
  return filterMatches && queryMatches && completionMatches;
}

function render() {
  groupsRoot.innerHTML = "";
  let visibleGroups = 0;

  taskGroups.forEach((group) => {
    const visibleTasks = group.tasks.filter((task) => taskMatches(task, group));
    if (!visibleTasks.length) return;
    visibleGroups += 1;

    const doneInGroup = group.tasks.filter((task) => state.completed.has(task.id)).length;
    const groupPercent = Math.round((doneInGroup / group.tasks.length) * 100);
    const section = document.createElement("section");
    section.className = "task-group";
    section.innerHTML = `
      <div class="task-group-header">
        <span class="priority-pill priority-${group.priority}">${group.priority}</span>
        <div class="task-group-title">
          <h3>${group.title}</h3>
          <p>${group.description}</p>
        </div>
        <div class="group-progress">
          <strong>${doneInGroup} / ${group.tasks.length} 완료</strong>
          <div class="mini-track" aria-hidden="true"><i style="width:${groupPercent}%"></i></div>
        </div>
      </div>
      <ul class="task-list"></ul>
    `;

    const list = section.querySelector(".task-list");
    visibleTasks.forEach((task) => {
      const complete = state.completed.has(task.id);
      const row = document.createElement("li");
      row.className = `task-row${complete ? " is-complete" : ""}`;
      row.innerHTML = `
        <button
          class="task-check"
          type="button"
          role="checkbox"
          aria-checked="${complete}"
          aria-label="${task.title} ${complete ? "완료 취소" : "완료 처리"}"
          data-task-id="${task.id}"
        ></button>
        <div class="task-main">
          <span class="task-title">${task.title}</span>
          <div class="task-meta"><span>담당 ${task.owner}</span><span>${group.priority}</span></div>
        </div>
        <span class="task-due${task.urgent ? " is-urgent" : ""}">${task.due}</span>
      `;
      list.appendChild(row);
    });

    groupsRoot.appendChild(section);
  });

  emptyState.hidden = visibleGroups > 0;
  updateSummary();
}

function updateSummary() {
  const tasks = allTasks();
  const done = tasks.filter((task) => state.completed.has(task.id)).length;
  const critical = tasks.filter((task) => task.priority === "P0" && !state.completed.has(task.id)).length;
  const percent = tasks.length ? Math.round((done / tasks.length) * 100) : 0;

  progressBar.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
  completedCount.textContent = done;
  remainingCount.textContent = tasks.length - done;
  criticalCount.textContent = critical;
}

function updateCountdown() {
  const target = new Date("2026-08-31T09:00:00+09:00");
  const now = new Date();
  const day = 1000 * 60 * 60 * 24;
  const diff = target - now;
  const label = diff >= 0 ? `D-${Math.ceil(diff / day)}` : `D+${Math.floor(Math.abs(diff) / day)}`;
  document.querySelector("#countdown").textContent = label;
}

groupsRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-task-id]");
  if (!button) return;
  const id = button.dataset.taskId;
  state.completed.has(id) ? state.completed.delete(id) : state.completed.add(id);
  persistCompleted();
  render();
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLocaleLowerCase("ko");
  render();
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    render();
  });
});

document.querySelector("#hide-completed").addEventListener("change", (event) => {
  state.hideCompleted = event.target.checked;
  render();
});

document.querySelector("#reset-button").addEventListener("click", () => {
  if (!state.completed.size) return;
  const confirmed = window.confirm("이 브라우저에 저장된 모든 완료 체크를 초기화할까요?");
  if (!confirmed) return;
  state.completed.clear();
  persistCompleted();
  render();
});

document.querySelector("#print-button").addEventListener("click", () => window.print());

updateCountdown();
render();
