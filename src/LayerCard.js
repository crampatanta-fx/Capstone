import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import LayerButton from './LayerButton';

function LayerCard(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={ props.dummyData }
                renderItem={({ item }) => <LayerButton title={item.title} setLayer={props.setLayer} layer={props.layer}/>}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '75%',
      },
})

export default LayerCard;