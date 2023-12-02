import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Popular' fetchUrl={requests.fetchPopular}/>
      <Row title='Now Playing' fetchUrl={requests.fetchNowPlaying}/>
      <Row title='Upcoming' fetchUrl={requests.fetchUpcoming}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentries}/>
    </div>
  );
}

export default App;
