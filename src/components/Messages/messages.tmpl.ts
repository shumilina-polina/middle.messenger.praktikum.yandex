import s from './messages.module.scss';

export const tmpl = `
<ul class="${s.list}">
     {{#each oldMessages}}
          <li class="${s.list_item} {{#if isAdmin}}
               ${s.list_item_admin}
               {{else}}
               ${s.list_item_user}
               {{/if}}">
               <span class="${s.content}">
                    {{content}}
               </span>
               <span class="${s.time}">
                    {{time}}
               </span>
          </li>
     {{/each}}
</ul>
`;
