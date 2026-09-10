# PERMANENT PROJECT RULE: COMPLETE MULTILINGUAL PARITY FOR ALL TOOLS

> **CRITICAL MANDATE**: English (`en`) is the master / reference version. Every tool, page, and feature on `srtconverters.com` MUST maintain 100% complete quality and structural parity across all 8 supported languages (`en`, `es`, `pt`, `fr`, `de`, `id`, `tr`, `it`). Quality and parity are always prioritized over speed.

---

## 1. Supported Locales
* **English (`en`)**: Master / reference version
* **Spanish (`es`)**
* **Portuguese (`pt`)**
* **French (`fr`)**
* **German (`de`)**
* **Indonesian (`id`)**
* **Turkish (`tr`)**
* **Italian (`it`)**

---

## 2. Mandatory Parity Requirements for Every Tool
Whenever a tool is created, updated, or modified, **ALL** of the following must be implemented with equal completeness, depth, and native fluency across all 8 languages:

1. **Full Tool UI & User-Facing Text**:
   - Drag-and-drop zone labels, paste placeholders, button texts, mode selectors, options, badges, character counts, and status indicators.
2. **Tool Instructions & Explanations**:
   - Step-by-step instructions, feature highlights, and format breakdowns.
3. **SEO & Guide Content**:
   - Comprehensive, long-form guides (~1,200+ words matching the English depth).
   - Identical structure: overview, advantages/features, comparison tables, format architecture, code examples (with localized badges), CLI commands (e.g. FFmpeg), real-world use cases, troubleshooting scenarios, and editor workflows (e.g. Aegisub).
4. **Headings and Subheadings**:
   - All H1, H2, H3, and H4 headings must be translated naturally without skipping sections.
5. **FAQs and Answers**:
   - The exact same number of FAQs as the English master version (e.g., if English has 8 FAQs, all 7 other languages must have all 8 FAQs).
   - In-depth, technically accurate answers tailored to native readers.
6. **Meta Title & Meta Description**:
   - Unique, search-optimized meta titles and descriptions for each locale in `src/i18n/seo.ts`.
7. **Helpful Information & Step-by-Step Guides**:
   - Complete guides with localized examples, code snippets, and callouts.
8. **Error Messages & Important Labels**:
   - File validation errors, parser warnings, encoding errors, and UI badges (`Issue`, `Cause`, `Solution`, `Original`, `Converted`, etc.).
9. **Internal Content & Supporting Text**:
   - Related tool cards, blog links, and localized anchor texts.
10. **Synchronized Changes**:
    - **NEVER** add, change, or refine a section in the English version without simultaneously making the equivalent native change across all 7 non-English locales.

---

## 3. Strict Translation & Localization Standards
* **No English Fallback / Residue**: No untranslated English text, strings, labels, or placeholders may appear on non-English pages.
* **No Machine-Like or Thin Content**: Translations must not be literal, mechanical, or summarized. They must read as if written by a native subject-matter expert in subtitle engineering.
* **Domain-Specific Terminology**: Correct localized terminology for subtitle formats, video containers, timing (milliseconds vs. centiseconds), styling tags, encoding (UTF-8), muxing, and media players.
* **No Truncation**: No section, paragraph, or tip may be shortened or omitted for convenience.

---

## 4. Pre-Completion Verification Checklist
Before declaring any tool, feature, or page complete, the agent must:
- [ ] Compare the English master against all 7 other language versions section-by-section.
- [ ] Verify that FAQ count in `src/i18n/tools.ts` matches English across all locales.
- [ ] Verify all UI labels, badges, and error messages are properly wired through localization dictionaries.
- [ ] Verify meta titles, descriptions, and slugs in `src/i18n/seo.ts` and `src/i18n/routes.ts`.
- [ ] Run `cmd.exe /c npm run build` and ensure all static routes compile with 0 errors.
- [ ] Inspect generated HTML files in `dist/` to confirm word counts and complete rendering.
