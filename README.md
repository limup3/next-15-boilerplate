영역	선택

Framework	Next.js 15 (App Router)

React	React 19 + Compiler

Language	TypeScript 5.4+

Styling	Tailwind CSS 3.4+

UI	shadcn/ui (선택)

Data Fetch	Server Actions + fetch

Client Cache	TanStack Query v5

Global State	Zustand

Bundler	Turbopack

Test	Vitest + RTL + Playwright

Runtime	Node 20 LTS

    src/
    ├── app/          # Next.js App Router
    ├── shared/       # 공통 유틸, UI, API 클라이언트
    ├── entities/     # 도메인 모델 (product, cart)
    ├── features/     # 기능 단위 (add-to-cart, cart-item)
    └── widgets/      # 큰 UI 블록 (header, product-list 등)


ex)

    src/
        ├── shared/
        │   ├── api/
        │   ├── lib/
        │   ├── ui/
        │   └── types/
        ├── entities/
        │   ├── product/
        │   │   ├── model/
        │   │   └── ui/
        │   └── cart/
        │       └── model/
        ├── features/
        │   ├── add-to-cart/
        │   │   └── ui/
        │   └── cart-item/
        │       └── ui/
        └── widgets/
            ├── header/
            │   └── ui/
            ├── product-list/
            │   └── ui/
            ├── product-detail/
            │   └── ui/
            └── cart/
                └── ui/
