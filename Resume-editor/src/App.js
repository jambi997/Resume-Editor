import logo from "./logo.svg";
import "./App.css";
import ResumeEditor from "./components/ResumeEditor";
// import { Font } from '@react-pdf/renderer';
// Font.register({
//   family: 'Open Sans',
//   src: 'https://fonts.gstatic.com/s/opensans/v22/mem8YaGs126MiZpBA-UFVZ0e.ttf',
// });



function App() {
  return (
    <div class="h-screen ">
      <div class="container mx-auto pt-5">
        <ResumeEditor />
      </div>
    </div>
  );
}

export default App;
