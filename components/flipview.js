import { View, Text, Pressable } from 'react-native';

function FlipView() {
    return (
        <View>
            <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' : 'blue'}]}>
                {/* Front face */}
                <View>
                    <Text>Front</Text>

                </View>
                {/* Back face */}
                <View style={{transform: [{ rotateY: "180deg" }]}}>
                    <Text>Back</Text>

                </View>
            </Pressable>
        </View>
    );
}

export default FlipView;