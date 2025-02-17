type Attrs = { [key: string]: string | boolean };

const singleTags = ['img', 'input', 'br', 'hr', 'link', 'meta', 'area', 'base', 'basefont', 'col', 'command', 'embed', 'isindex', 'keygen', 'param', 'source', 'track', 'wbr']

class Tag {
    constructor(public tagName: string, public attrs: Attrs = {}, public children: string = '') { }

    toString() {
        const isSingleTag = singleTags.includes(this.tagName);
        const attrsEntries = Object.entries(this.attrs);
        const attrStr = attrsEntries.length === 0 ? '' : ` ${attrsEntries
            .map(([key, value]) => {
                if (typeof value === 'boolean') return key;
                return `${key}="${value}"`;
            })
            .join(' ')}`;
        return isSingleTag ? `<${this.tagName}${attrStr}>` : `<${this.tagName}${attrStr}>${this.children}</${this.tagName}>`;
    }
}

export default Tag;
