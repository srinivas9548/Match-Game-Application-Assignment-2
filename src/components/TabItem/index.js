import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabBtnClassName = isActive ? 'active-tab' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
