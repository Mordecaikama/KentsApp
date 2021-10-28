import { ArrowBackIos } from '@mui/icons-material'

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} leftarrow`}
      onClick={onClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <ArrowBackIos
        style={{
          color: 'red',
        }}
      />
    </div>
  )
}

export default PrevArrow
