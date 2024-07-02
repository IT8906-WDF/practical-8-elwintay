import { IsEmojiContext, emoji } from './IsEmojiContext.js'

export default function RPSRecords(props) {
    const isEmoji = React.useContext(IsEmojiContext);
    const winCount = props.records.filter((record) => record.result === 'Win').length;
    const totalCount = props.records.length;
    const winPercentage = totalCount ? ((winCount / totalCount) * 100).toFixed(2) : 0;
    return (
        <div>
            {isEmoji ? emoji[props.move] : props.move}
            <p>Rounds (Win %: {winPercentage}):</p>
            <ol>
                {props.records.map(function (record, index) {
                    // Sample record: { result: "Win", move: "Rock" }
                    return (
                        <li onClick={() => props.onHide(index)} key={index}>
                            {record.result} ({isEmoji ? emoji[record.move] : record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
