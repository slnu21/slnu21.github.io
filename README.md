# SlnU — 블로그

Jekyll + GitHub Pages 로 호스팅하는 글 중심 블로그.
공부하고 정리한 내용을 기록하는 공간이며, 댓글은 **GitHub Issues**(Utterances)로 동작합니다.
검색 · 목차(TOC) · 시리즈/카테고리 · 코드 복사 버튼을 지원합니다.

## 빠른 시작 (배포)

1. GitHub 에 **`slnu21.github.io`** 이름의 **공개** 레포 생성.
2. 이 폴더(`SlnU-blog`)의 내용을 레포 루트에 푸시.
   ```bash
   cd SlnU-blog
   git init
   git add .
   git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/slnu21/slnu21.github.io.git
   git push -u origin main
   ```
3. 레포 **Settings ▸ Pages** → Source 를 `Deploy from a branch`, 브랜치 `main / (root)` 지정.
4. 몇 분 뒤 `https://slnu21.github.io` 접속.
5. **댓글 활성화**: <https://github.com/apps/utterances> 에서 utterances 앱을 이 레포에 설치.

> 사용자명을 바꾸려면: `_config.yml` 의 `url`/`author.github`/`comments.utterances.repo`,
> `_data/resume.yml` 의 링크, `_data/projects.yml` 의 `owner/name` 을 본인 값으로 교체.

## 로컬 미리보기

```bash
cd SlnU-blog
bundle install
bundle exec jekyll serve --livereload
# http://localhost:4000
```

디자인 시안만 빠르게 보려면 `design-mockup.html` 을 브라우저로 직접 열면 됩니다.

## 콘텐츠 작성

| 하고 싶은 것 | 수정할 파일 |
|--------------|-------------|
| 새 글 (Markdown) | `_posts/YYYY-MM-DD-제목.md` 추가 |
| 새 글 (HTML) | `_posts/YYYY-MM-DD-제목.html` 추가 (front matter 포함) |
| 메뉴 | `_data/navigation.yml` |
| 사이트 정보/댓글/SEO | `_config.yml` |
| 디자인 색/레이아웃 | `assets/css/main.scss` |

### 글 front matter 예시
```yaml
---
title: "글 제목"
date: 2026-05-30 10:00:00 +0900
categories: [개발]          # /categories/ 에서 분류됨
tags: [Jekyll, 블로그]       # /tags/ 에서 분류됨
series: "블로그 만들기"      # (선택) 같은 series 글끼리 시리즈 박스로 묶임
excerpt: "목록에 보일 한 줄 요약"
---
```

- **목차(TOC)**: 본문에 `##`/`###` 헤딩이 2개 이상이면 자동 생성됩니다.
- **코드 복사 버튼**: 코드블록에 마우스를 올리면 우측 상단에 '복사' 버튼이 나타납니다.
- **검색**: 새 글을 추가하면 `search.json` 이 자동 갱신되어 `/search/` 에서 검색됩니다.

## 구조

```
_config.yml        사이트 설정 (개인정보 최소화: author.name 만)
index.html         홈 = 최신 글 목록
search.json        검색 인덱스 (빌드 시 자동 생성)
_data/             navigation (메뉴)
_layouts/          default / post(목차·시리즈·댓글) / page / archive
_includes/         head, header, footer, comments(Utterances), post-card
_pages/            about(최소) / categories / tags / search / archive
_posts/            글 (md / html)
assets/            css(main.scss) · js(theme-toggle, copy-code, toc, search-init)
design-mockup.html 단독 디자인 시안 (빌드 제외)
```

## 메모

- 댓글(Utterances)은 **공개 레포 + 앱 설치** 시에만 동작합니다(로컬에선 영역만 표시).
- 커스텀 도메인을 쓰려면 `CNAME` 파일 추가 + DNS 설정.
