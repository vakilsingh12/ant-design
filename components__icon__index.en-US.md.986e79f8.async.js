"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7578],{18323:function(p,a,t){t.r(a);var Z=t(502143),v=t(968521),h=t(720719),g=t(28840),o=t(759907),c=t(828089),f=t(825673),x=t(902068),b=t(574399),E=t(863942),I=t(316073),T=t(24628),P=t(719260),y=t(956140),i=t(127179),u=t(905388),s=t(104979),M=t(606965),O=t(268696),D=t(587302),l=t(424128),w=t(249706),C=t(795127),k=t(116846),A=t(73024),r=t(606641),d=t(667294),n=t(370917);function _(){var m=(0,r.eL)(),e=m.texts;return(0,n.tZ)(r.dY,null,(0,n.tZ)(d.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"how-to-use"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,n.tZ)("p",null,e[0].value,(0,n.tZ)("code",null,e[1].value),e[2].value),(0,n.tZ)(o.Z,{lang:"bash"},e[3].value),(0,n.tZ)("h2",{id:"list-of-icons"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#list-of-icons",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"List of icons")),(0,n.tZ)(s.Z,null),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(u.Z,{items:[{demo:{id:"components-icon-demo-basic"},previewerProps:{title:"Basic",filename:"components/icon/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
const App = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);
export default App;
`,description:"<p>Import icons from <code>@ant-design/icons</code>, component name of icons with different theme is the icon name suffixed by the theme name. Specify the <code>spin</code> property to show spinning animation.</p>"}},{demo:{id:"components-icon-demo-two-tone"},previewerProps:{title:"Two-tone icon and colorful icon",filename:"components/icon/demo/two-tone.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Space } from 'antd';
const App = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);
export default App;
`,description:"<p>You can set <code>twoToneColor</code> prop to specific primary color for two-tone icons.</p>"}},{demo:{id:"components-icon-demo-custom"},previewerProps:{title:"Custom Icon",filename:"components/icon/demo/custom.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import Icon, { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
  </svg>
);
const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;
const PandaIcon = (props) => <Icon component={PandaSvg} {...props} />;
const App = () => (
  <Space>
    <HeartIcon
      style={{
        color: 'hotpink',
      }}
    />
    <PandaIcon
      style={{
        fontSize: '32px',
      }}
    />
    <Icon component={HomeOutlined} />
    <HomeOutlined />
  </Space>
);
export default App;
`,description:"<p>Create a reusable React component by using <code>&#x3C;Icon component={...} /></code>. The property <code>component</code> takes a React component that renders to <code>svg</code> element.</p>"}},{demo:{id:"components-icon-demo-iconfont"},previewerProps:{title:"Use iconfont.cn",filename:"components/icon/demo/iconfont.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const App = () => (
  <Space>
    <IconFont type="icon-tuichu" />
    <IconFont type="icon-facebook" />
    <IconFont type="icon-twitter" />
  </Space>
);
export default App;
`,description:'<p>If you are using <a href="http://iconfont.cn/">iconfont.cn</a>, you can use the icons in your project gracefully.</p>'}},{demo:{id:"components-icon-demo-scripturl"},previewerProps:{title:"Multiple resources from iconfont.cn",filename:"components/icon/demo/scriptUrl.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.10.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.3.0","rc-menu":"~9.9.2","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.8.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.7.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    // icon-javascript, icon-java, icon-shoppingcart (overridden)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const App = () => (
  <Space>
    <IconFont type="icon-javascript" />
    <IconFont type="icon-java" />
    <IconFont type="icon-shoppingcart" />
    <IconFont type="icon-python" />
  </Space>
);
export default App;
`,description:'<p>You can use <code>scriptUrl</code> as an array after <code>@ant-design/icons@4.1.0</code>, manage icons in one <code>&#x3C;Icon /></code> from multiple <a href="http://iconfont.cn/">iconfont.cn</a> resources. If icon with a duplicate name in resources, it will overridden in array order.</p>'}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"common-icon"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-icon",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Common Icon"),(0,n.tZ)(c.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value),(0,n.tZ)("th",null,e[7].value),(0,n.tZ)("th",null,e[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[13].value),(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value,(0,n.tZ)("code",null,e[23].value),e[24].value,(0,n.tZ)("code",null,e[25].value)),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,e[32].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[33].value),(0,n.tZ)("h3",{id:"custom-icon"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-icon",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom Icon"),(0,n.tZ)(c.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[34].value),(0,n.tZ)("th",null,e[35].value),(0,n.tZ)("th",null,e[36].value),(0,n.tZ)("th",null,e[37].value),(0,n.tZ)("th",null,e[38].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value),(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,e[44].value),(0,n.tZ)("td",null,e[45].value),(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[47].value),(0,n.tZ)("td",null,e[48].value),(0,n.tZ)("td",null,e[49].value),(0,n.tZ)("td",null,e[50].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[51].value),(0,n.tZ)("td",null,e[52].value,(0,n.tZ)("code",null,e[53].value),e[54].value,(0,n.tZ)("code",null,e[55].value)),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"about-svg-icons"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#about-svg-icons",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"About SVG icons"),(0,n.tZ)("p",null,e[58].value,(0,n.tZ)("code",null,e[59].value),e[60].value),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,e[61].value),(0,n.tZ)("li",null,e[62].value),(0,n.tZ)("li",null,e[63].value),(0,n.tZ)("li",null,e[64].value)),(0,n.tZ)("p",null,e[65].value,(0,n.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/10353",sourceType:"a"},e[66].value),e[67].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,e[68].value,(0,n.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/12011",sourceType:"a"},e[69].value),e[70].value),(0,n.tZ)("p",null,e[71].value,(0,n.tZ)(l.Z,{href:"https://github.com/Beven91/webpack-ant-icon-loader",sourceType:"a"},e[72].value),e[73].value)),(0,n.tZ)("p",null,e[74].value,(0,n.tZ)("code",null,e[75].value),e[76].value,(0,n.tZ)("code",null,e[77].value),e[78].value,(0,n.tZ)("code",null,e[79].value),e[80].value,(0,n.tZ)("code",null,e[81].value),e[82].value,(0,n.tZ)("code",null,e[83].value),e[84].value,(0,n.tZ)("code",null,e[85].value),e[86].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[87].value),(0,n.tZ)("p",null,e[88].value,(0,n.tZ)("code",null,e[89].value),e[90].value,(0,n.tZ)("code",null,e[91].value),e[92].value,(0,n.tZ)("code",null,e[93].value),e[94].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[95].value),(0,n.tZ)("h3",{id:"set-twotone-color"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#set-twotone-color",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Set TwoTone Color"),(0,n.tZ)("p",null,e[96].value,(0,n.tZ)("code",null,e[97].value),e[98].value,(0,n.tZ)("code",null,e[99].value),e[100].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[101].value),(0,n.tZ)("h3",{id:"custom-font-icon"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-font-icon",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom Font Icon"),(0,n.tZ)("p",null,e[102].value,(0,n.tZ)("code",null,e[103].value),e[104].value,(0,n.tZ)(l.Z,{href:"http://iconfont.cn/",sourceType:"a"},e[105].value),e[106].value),(0,n.tZ)("blockquote",null,(0,n.tZ)("p",null,e[107].value,(0,n.tZ)(l.Z,{href:"http://iconfont.cn/",sourceType:"a"},e[108].value),e[109].value)),(0,n.tZ)(o.Z,{lang:"jsx"},e[110].value),(0,n.tZ)("p",null,e[111].value),(0,n.tZ)("p",null,e[112].value),(0,n.tZ)(c.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[113].value),(0,n.tZ)("th",null,e[114].value),(0,n.tZ)("th",null,e[115].value),(0,n.tZ)("th",null,e[116].value),(0,n.tZ)("th",null,e[117].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[118].value),(0,n.tZ)("td",null,e[119].value),(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null,e[123].value,(0,n.tZ)(l.Z,{href:"http://iconfont.cn/",sourceType:"a"},e[124].value),e[125].value,(0,n.tZ)("code",null,e[126].value),e[127].value,(0,n.tZ)("code",null,e[128].value)),(0,n.tZ)("td",null,e[129].value),(0,n.tZ)("td",null,e[130].value),(0,n.tZ)("td",null)))),(0,n.tZ)("p",null,e[131].value,(0,n.tZ)("code",null,e[132].value),e[133].value),(0,n.tZ)("p",null,e[134].value,(0,n.tZ)(l.Z,{href:"http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code",sourceType:"a"},e[135].value),e[136].value,(0,n.tZ)("code",null,e[137].value),e[138].value),(0,n.tZ)("h3",{id:"custom-svg-icon"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-svg-icon",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Custom SVG Icon"),(0,n.tZ)("p",null,e[139].value,(0,n.tZ)("code",null,e[140].value),e[141].value,(0,n.tZ)(l.Z,{href:"https://www.npmjs.com/package/@svgr/webpack",sourceType:"a"},(0,n.tZ)("code",null,e[142].value)),e[143].value,(0,n.tZ)("code",null,e[144].value),e[145].value,(0,n.tZ)("code",null,e[146].value),e[147].value,(0,n.tZ)(l.Z,{href:"https://github.com/smooth-code/svgr#options",sourceType:"a"},e[148].value),e[149].value),(0,n.tZ)(o.Z,{lang:"js"},e[150].value),(0,n.tZ)(o.Z,{lang:"jsx"},e[151].value),(0,n.tZ)("p",null,e[152].value),(0,n.tZ)(c.Z,{className:"component-api-table"},(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[153].value),(0,n.tZ)("th",null,e[154].value),(0,n.tZ)("th",null,e[155].value),(0,n.tZ)("th",null,e[156].value),(0,n.tZ)("th",null,e[157].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[158].value),(0,n.tZ)("td",null,e[159].value,(0,n.tZ)("code",null,e[160].value),e[161].value),(0,n.tZ)("td",null,e[162].value),(0,n.tZ)("td",null,e[163].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[164].value),(0,n.tZ)("td",null,e[165].value,(0,n.tZ)("code",null,e[166].value),e[167].value),(0,n.tZ)("td",null,e[168].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[169].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[170].value),(0,n.tZ)("td",null,e[171].value,(0,n.tZ)("code",null,e[172].value),e[173].value),(0,n.tZ)("td",null,e[174].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[175].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[176].value),(0,n.tZ)("td",null,e[177].value,(0,n.tZ)("code",null,e[178].value),e[179].value),(0,n.tZ)("td",null,e[180].value),(0,n.tZ)("td",null,e[181].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[182].value),(0,n.tZ)("td",null,e[183].value,(0,n.tZ)("code",null,e[184].value),e[185].value),(0,n.tZ)("td",null,e[186].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[187].value)),(0,n.tZ)("td",null)))),(0,n.tZ)("h2",{id:"design-token"},(0,n.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,n.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,n.tZ)(i.Z,{component:"Icon"})))}a.default=_}}]);
