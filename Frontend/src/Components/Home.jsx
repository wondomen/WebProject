import Navbar from './NavBar'
import TaskDisplay from './TaskDisplay'
import '../Styles/App.css'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <TaskDisplay /> */}
      <div className="container">
       <div>
       <h2>Welcome!</h2>
          <p>Get things done with Task Manager.</p>
      </div>
      <div>
      <img src="../public/pic1.jpg" alt="Image holder" />
        
     </div>
</div>
    </>
    
  )
}

export default Home;