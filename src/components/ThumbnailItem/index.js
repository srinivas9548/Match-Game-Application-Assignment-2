import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, clickThumbnail} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnailBtn = () => {
    clickThumbnail(id)
  }

  return (
    <li className="thumbnail-item-container">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnailBtn}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
