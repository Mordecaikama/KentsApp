import { ArrowForwardIos } from '@mui/icons-material'

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} normalArrow`}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <ArrowForwardIos style={{ color: 'red' }} />
    </div>
  )
}

export default NextArrow
