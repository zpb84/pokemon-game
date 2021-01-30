import Header from "./components/header/index"
import Layout from "./components/layout/index"
import Footer from "./components/footer/index"
import PokemonCard from "./components/pokemon_card/index"

import './app.css';

import bg1 from "./images/bg1.jpg"
import pokemons from './pokemons_db.json'

const App = () => {
  return (
    <>
      <Header title="Pokemon Game" desc="Created for learning React" />
      <Layout id="l01" title="Rules of the game" colorBg="#e3c60b">
        <p key="p1">
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p key="p2">
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
        </p>
        <p key="p3">
          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
        </p>
        <p key="p4">
          If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
        </p>
      </Layout>
      <Layout id="l02" title="Pokemons" urlBg={bg1}>
        {pokemons && pokemons.map((p)=>
          <PokemonCard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            values={p.values}
            image={p.img}
          />)
        }
      </Layout>
      <Footer />
    </>
  );
}

export default App;
