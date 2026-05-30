source "https://rubygems.org"

# GitHub Pages 가 실제로 사용하는 gem 묶음 (Jekyll + 화이트리스트 플러그인 버전 고정)
# 로컬에서 GitHub Pages 와 동일한 환경으로 빌드/미리보기 가능
gem "github-pages", group: :jekyll_plugins

# 윈도우 / JRuby 호환용 (타임존 데이터)
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# 참고: 파일 변경 자동 감지(wdm)는 Ruby 3.3 에서 빌드 실패하여 제외.
#       로컬에서는 `jekyll serve --livereload --force_polling` 으로 자동 새로고침 사용.

# 최신 Ruby 에서 빠진 기본 gem 보완
gem "webrick", "~> 1.8"
