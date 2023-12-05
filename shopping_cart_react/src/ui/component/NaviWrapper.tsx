import * as React from 'react';
import { useCollapse } from 'react-collapsed';
type Props = {

}
function InnerCollapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? '手機' : '手機'}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          Now you can see the hidden content. <br /><br />
          Click <i>Collapse</i> to hide this content...
        </div>
      </div>
    </div>
  );
}
function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? '商品分類' : '商品分類'}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          Now you can see the hidden content. <br /><br />
          Click <i>Close</i> to hide everything... <br /><br />
          <InnerCollapsible />
        </div>
      </div>
    </div>
  );
}
function NaviWrapper() {
  return (
    <Collapsible />
  );
}

export default NaviWrapper;