import FontAwesome from "@expo/vector-icons/FontAwesome";

function IncorrectButton({ onPress }) {
    return (
        <FontAwesome.Button
            name="times-circle"
            backgroundColor="rgb(155, 62, 62)"
            onPress={onPress}
            pressableStyle={{opacity: 0.75}}
        >
            Not Known
        </FontAwesome.Button>
    );
}

export default IncorrectButton;
