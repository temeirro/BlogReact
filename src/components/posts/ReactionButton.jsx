import { useDispatch } from "react-redux";
import { reactionAdd } from "../../store/appSlice/postsSlice";

const reactionEmoji = {
    super: '👍',
    wow: '😮',
    heart: '🥰',
    angry: '😠'
}

// [['super', '👍'],
// ['wow', '😮'],
// ['heart', '🥰'],
// ['angry', '😠' ]]

const ReactionButton = ({ post }) => {
    const dispatch = useDispatch();
    const arrReactionBtn = Object.entries(reactionEmoji);
    return (
        <div>

            {
                arrReactionBtn.map(([nameEmoji, emojiIcon]) => (
                    <button
                        className="reactionBtn"
                        key={nameEmoji}
                        type="button"
                        onClick={()=>dispatch(reactionAdd({ postId: post.id, reaction: nameEmoji }))}
                    >
                        {emojiIcon} {post.reactions[nameEmoji]}
                    </button>
                ))
            }
        </div>
    )
}

export default ReactionButton;
{/* <button
type="button"
onClick={()=>null}
>
    {reactionEmoji["super"]}  {post.reactions.super}
</button>
<button
type="button"
onClick={()=>null}
>
    {reactionEmoji["wow"]}  {post.reactions.wow}
</button> */}