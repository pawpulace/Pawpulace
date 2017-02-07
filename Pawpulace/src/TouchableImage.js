
var React = require('react-native');
var Dimensions = require('Dimensions');
var windowDimension = Dimensions.get('window');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image,
    TouchableHighlight,
    TextInput,
} = React;


const itemSize = (windowDimension.width/4);

const styles = StyleSheet.create({
    image : {
        width  : itemSize,
        height : itemSize,
    },
});


class TouchableImage extends React.Component {

    defaultImage = require('../assets/face.png');

    onPress = () => {
            var props = this.props,
            onPress = props.onPress;

            onPress && onPress(props.index, props.data);
    };

    render() {
        var props = this.props,
               data  = props.data,
               animate = props.animate,
               source;

        if (data) {
            source = {
                //uri    : animate ? data.images.downsized.url : data.images.original_still.url , 
                width  : itemSize, 
                height : itemSize
            }
        }

        return (<TouchableOpacity style={props.style} onPress={this.onPress}>
                    <Image style={styles.image}
                                    source = {source}
                                    defaultSource={this.defaultImage}/>
                    </TouchableOpacity>);
    }
}

module.exports = TouchableImage;