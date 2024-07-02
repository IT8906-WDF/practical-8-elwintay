import RPSButtons from './RPSButtons.js';
import RPSInput from './RPSInput.js';
import RPSRecords from './RPSRecords.js';
import recordsReducer from './recordsReducer.js';
import { IsEmojiContext } from './IsEmojiContext.js';

export default function RockPaperScissors(props) {
    const [isEmoji, setIsEmoji] = React.useState(true);
    // Use Reducer instead
    const [records, dispatch] = React.useReducer(recordsReducer, []);
    return (
        <IsEmojiContext.Provider value={isEmoji}>
            <div>
            <button onClick={function() { setIsEmoji(!isEmoji); }}>Toggle Emoji</button>
                <RPSButtons
                    onButtonPressed={(move) => {
                    // Dispatch instead of setRecords
                    dispatch({ name: 'add', move: move });
                    }}
                    records={records}
                />
                // Dispatch instead of setRecords
                <RPSInput onAdd={(record) => dispatch({ name: 'force add', record: record })} />
                <RPSRecords
                    records={records}
                    onHide={(index) => {
                    // Dispatch instead of setRecords
                    dispatch({ name: 'remove', index: index });
                    }}
                />
            </div>
        </IsEmojiContext.Provider>
    );
    }
