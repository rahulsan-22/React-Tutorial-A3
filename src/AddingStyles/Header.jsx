import Styles from "./Header.module.css"
const Header = () => {
  return (
    <div>
      <h1 className={Styles.heading}>Lechara?</h1>
      <p id={Styles.para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quibusdam corporis quis explicabo adipisci pariatur consequuntur officia, omnis facilis, perferendis accusantium ratione earum ipsam magnam, quaerat temporibus blanditiis rerum deserunt.</p>
      <button className={Styles.btn}>Click</button>
    </div>
  )
}

export default Header