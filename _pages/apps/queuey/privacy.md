---
layout: page
title: "개인정보 처리방침 / Privacy Policy"
permalink: /apps/queuey/privacy/
---

- **제품 / Product:** Queuey(큐이) (Windows 데스크톱 앱)
- **시행일 / Effective date:** 2026-11-12
- **게시자 / Publisher:** `SlnU`
- **문의 / Contact:** `raltlsdn@naver.com`

---

## 한국어

**Queuey(큐이)**(이하 "본 앱")는 작업 중 떠오른 질문·할 일을 줄 세워 두는 **오프라인** 대기열 위젯입니다. 본 앱은 사용자의 개인정보를 **수집하거나 외부로 전송하지 않습니다.**

### 1. 수집하는 정보
본 앱은 어떠한 개인정보도 수집하지 않습니다. 계정 생성이나 로그인이 없으며, 이름·이메일·전화번호·위치 등 개인 식별 정보를 요구하지 않습니다.

### 2. 데이터 저장 (사용자 기기에만)
- 대기열 항목(제목·설명·답), 프로젝트 이름과 폴더 경로, 간식·꾸미기 상태는 **사용자 기기의 데이터 폴더**(`%APPDATA%\com.slnu21.queuey\`)의 `queuey.db`에만 저장됩니다. 앱이 데이터 형식을 올릴 때는 같은 폴더에 백업 사본(`queuey.db.v*.bak`)을 남깁니다.
- 창 위치·배경·화면 설정, 로컬 연결 포트·연결 토큰, 내보내기를 켠 프로젝트와 문서 경로는 같은 폴더의 `settings.json`에 저장됩니다.
- **Microsoft Store 설치판**은 Windows가 위 폴더를 앱 전용 자리(`%LOCALAPPDATA%\Packages\<앱 패키지>\LocalCache\Roaming\com.slnu21.queuey\`)로 옮겨 저장하며, 앱을 제거하면 함께 삭제됩니다.
- 위 데이터는 사용자 기기를 벗어나지 않으며, 사용자가 직접 지울 수 있습니다.

### 3. 프로젝트 폴더
- 프로젝트를 구분하려고, 사용자가 고른 폴더나 연결된 에이전트가 알려 준 작업 폴더에서 **`.git` 안의 작은 설정 파일만** 읽어 저장소 루트를 찾습니다. 소스 파일 내용은 읽지 않으며, git 등 다른 프로그램을 실행하지 않습니다.
- **대기열 내보내기(켠 경우만)**: 사용자가 프로젝트마다 켜면, 그 프로젝트 폴더 **안**에서 사용자가 고른 마크다운 문서 하나(기본 `docs/TASKS.md`)에 대기열 사본(하는 중·대기·최근 끝남과 답)을 적습니다. 문서 안 큐이 구역(`queuey:begin`~`queuey:end`)만 바꾸고 나머지는 건드리지 않으며, 프로젝트 폴더 밖이나 링크 파일에는 쓰지 않습니다. 기본은 꺼짐이고, 끄면 더 쓰지 않습니다. 이 문서를 커밋하거나 외부로 보내지 않습니다.
- 연결 방법 창의 "복사" 버튼을 누르면 안내 문구를 클립보드에 씁니다(사용자가 누를 때만).

### 4. 감시하지 않습니다
본 앱은 키보드·마우스 입력, 커서 위치, 활성 창을 감시하지 않으며, 다른 프로그램을 실행하지 않습니다.

### 5. 네트워크 통신
- 본 앱은 **외부 서버와 통신하지 않습니다.** 업데이트 확인·오류 보고·사용 통계 기능이 없으며, 콘텐츠 보안 정책(CSP)으로 원격 리소스의 로드·전송을 차단합니다.
- AI 코딩 에이전트(예: Claude Code)와 연결하기 위해 **같은 PC 안에서만 접근할 수 있는 로컬 서버**(`127.0.0.1`, 기본 포트 47215)를 엽니다. 이 서버는 연결 토큰이 있는 요청만 받으며, 다른 기기에서는 접근할 수 없습니다.
- 사용자가 연결한 에이전트는 이 로컬 서버로 대기열 항목·질문을 등록하고 대기열 내용을 읽을 수 있습니다. 에이전트가 읽은 내용을 자기 서비스로 보내는지는 **그 에이전트와 서비스 제공자의 정책**을 따르며, 본 방침의 적용 범위 밖입니다. 본 앱이 에이전트 연결 설정을 대신 바꾸지는 않습니다.
- Microsoft Store로 설치·업데이트하는 경우 그 과정은 Microsoft가 처리하며, 본 방침의 적용 범위 밖입니다.

### 6. 제3자 구성요소
- 본 앱은 화면 표시를 위해 Windows의 **Microsoft Edge WebView2 런타임**을 사용합니다. WebView2 자체의 데이터 처리는 Microsoft의 정책을 따릅니다. 본 앱은 WebView2를 통해 사용자 데이터를 외부로 전송하지 않습니다.
- 글꼴(갈무리)은 앱에 포함되어 있으며 인터넷에서 내려받지 않습니다.
- **분석(analytics)·광고·추적 SDK를 일절 포함하지 않습니다.**
- 포함된 오픈소스 구성요소의 라이선스 고지는 배포본에 동봉된 THIRD-PARTY-NOTICES를 따릅니다.

### 7. 아동의 개인정보
본 앱은 개인정보를 수집하지 않으므로, 아동을 포함한 어떤 사용자로부터도 개인정보를 수집하지 않습니다.

### 8. 방침의 변경
외부와 통신하거나 위에 적지 않은 파일에 쓰는 기능을 도입할 경우, 본 방침을 사전에 갱신하고 릴리스 노트 또는 스토어 페이지에서 고지합니다.

### 9. 문의
개인정보 관련 문의는 `raltlsdn@naver.com` 로 연락 주시기 바랍니다.

---

## English

**Queuey** (the "App") is an **offline** queue widget for lining up the questions and to-dos that come up while you work. The App does **not collect or transmit** any personal information.

### 1. Information We Collect
The App collects no personal information. There is no account or sign-in, and the App does not ask for identifying data such as name, email, phone number, or location.

### 2. Data Storage (On Your Device Only)
- Queue items (titles, descriptions, answers), project names and folder paths, and snack/dress-up state are stored **only in the data folder on your device** (`%APPDATA%\com.slnu21.queuey\`) in `queuey.db`. When the App upgrades its data format, it leaves a backup copy (`queuey.db.v*.bak`) in the same folder.
- Window position, backdrop and display settings, the local connection port and token, and which projects export to which document, are stored in `settings.json` in the same folder.
- In the **Microsoft Store edition**, Windows keeps that folder in an app-private location (`%LOCALAPPDATA%\Packages\<app package>\LocalCache\Roaming\com.slnu21.queuey\`), and it is removed when you uninstall the App.
- This data never leaves your device, and you can delete it yourself.

### 3. Project Folders
- To tell projects apart, the App reads **only the small configuration files inside `.git`** in a folder you choose, or in the working folder a connected agent reports, to find the repository root. It does not read your source files and does not run git or any other program.
- **Queue export (only if you turn it on)**: When you turn it on for a project, the App writes a copy of the queue (in progress, waiting, recently finished and answered) to one Markdown document you choose **inside** that project folder (default `docs/TASKS.md`). It changes only the Queuey section of the document (`queuey:begin` to `queuey:end`) and leaves the rest untouched, and it never writes outside the project folder or to linked files. It is off by default and stops writing when you turn it off. The App does not commit this document or send it anywhere.
- When you press "Copy" in the connection window, the App writes the instructions to the clipboard (only when you press it).

### 4. No Monitoring
The App does not monitor keyboard or mouse input, cursor position, or the active window, and it does not launch other programs.

### 5. Network Communication
- The App **does not communicate with external servers.** It has no update check, error reporting or usage statistics, and a Content Security Policy (CSP) blocks loading or sending remote resources.
- To connect with AI coding agents (such as Claude Code), the App opens a **local server reachable only from the same PC** (`127.0.0.1`, default port 47215). It accepts only requests that carry the connection token and cannot be reached from other devices.
- An agent you connect can add items and questions to the queue and read the queue through this local server. Whether the agent sends what it reads to its own service is governed by **that agent's and its provider's policies** and falls outside this policy. The App never changes an agent's connection settings on your behalf.
- If you install or update through the Microsoft Store, that process is handled by Microsoft and falls outside this policy.

### 6. Third-Party Components
- The App uses the **Microsoft Edge WebView2 runtime** on Windows to render its UI. WebView2's own data handling is governed by Microsoft's policies. The App does not send user data through WebView2 to any external party.
- Fonts (Galmuri) are bundled with the App and are not downloaded from the internet.
- The App contains **no analytics, advertising, or tracking SDKs.**
- License notices for bundled open-source components are provided in the THIRD-PARTY-NOTICES included with the App.

### 7. Children's Privacy
Because the App collects no personal information, it collects none from children or any other users.

### 8. Changes to This Policy
If features that communicate externally or write to files not described above are introduced, this policy will be updated in advance and disclosed in the release notes or on the store page.

### 9. Contact
For privacy inquiries, please contact `raltlsdn@naver.com`.
