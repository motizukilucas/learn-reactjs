import Card from './Card';

function NotesList() {
    return (
        <ul>
            {
                Array.of("Work", "Study").map((category) => {
                    return (
                        <li>
                            <div>{category}</div>
                            <Card />
                        </li>
                    );
                })
            }
        </ul>
      
    );
  }
  
  export default NotesList;
  