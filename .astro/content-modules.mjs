
export default new Map([
    ["src/content/docs/01-setup/index.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fdocs%2F01-setup%2Findex.mdx&astroContentModuleFlag=true")],
    ["src/content/docs/02-macho/index.mdx", () => import("astro:content-layer-deferred-module?astro%3Acontent-layer-deferred-module=&fileName=src%2Fcontent%2Fdocs%2F02-macho%2Findex.mdx&astroContentModuleFlag=true")]
]); 
