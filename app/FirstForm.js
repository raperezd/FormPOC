
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';


import BizagiGroup from './components/BizagiGroup';

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
    }
});
 

class FirstForm extends React.Component {
    static navigationOptions = {
        title: 'Forma 1 POC'
    };

    render() {
        const { navigate } = this.props.navigation; 
        return ( 
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.form}>
                    <BizagiGroup collapsed={false} headerText="Office supplies request"> 
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mi iaculis, ultricies tellus nec, tincidunt lectus.
                            Sed tempus lectus eget tristique cursus. Fusce porttitor, metus id finibus elementum, erat odio eleifend ante, non scelerisque
                            lorem neque scelerisque elit. In euismod nisi elementum lorem pharetra, eu malesuada nulla hendrerit. In hac habitasse platea dictumst.
                            Aliquam quis faucibus mauris. Integer eleifend erat purus, quis porttitor justo blandit non. Nulla ornare, nunc id ultrices tincidunt,
                            mauris purus eleifend justo, sed consectetur velit neque quis metus. Ut sed volutpat mauris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mi iaculis, ultricies tellus nec, tincidunt lectus.
                            Sed tempus lectus eget tristique cursus. Fusce porttitor, metus id finibus elementum, erat odio eleifend ante, non scelerisque
                            lorem neque scelerisque elit. In euismod nisi elementum lorem pharetra, eu malesuada nulla hendrerit. In hac habitasse platea dictumst.
                            Aliquam quis faucibus mauris. Integer eleifend erat purus, quis porttitor justo blandit non. Nulla ornare, nunc id ultrices tincidunt,
                            mauris purus eleifend justo, sed consectetur velit neque quis metus. Ut sed volutpat mauris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mi iaculis, ultricies tellus nec, tincidunt lectus.
                            Sed tempus lectus eget tristique cursus. Fusce porttitor, metus id finibus elementum, erat odio eleifend ante, non scelerisque
                            lorem neque scelerisque elit. In euismod nisi elementum lorem pharetra, eu malesuada nulla hendrerit. In hac habitasse platea dictumst.
                            Aliquam quis faucibus mauris. Integer eleifend erat purus, quis porttitor justo blandit non. Nulla ornare, nunc id ultrices tincidunt,
                            mauris purus eleifend justo, sed consectetur velit neque quis metus. Ut sed volutpat mauris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac mi iaculis, ultricies tellus nec, tincidunt lectus.
                            Sed tempus lectus eget tristique cursus. Fusce porttitor, metus id finibus elementum, erat odio eleifend ante, non scelerisque
                            lorem neque scelerisque elit. In euismod nisi elementum lorem pharetra, eu malesuada nulla hendrerit. In hac habitasse platea dictumst.
                            Aliquam quis faucibus mauris. Integer eleifend erat purus, quis porttitor justo blandit non. Nulla ornare, nunc id ultrices tincidunt,
                            mauris purus eleifend justo, sed consectetur velit neque quis metus. Ut sed volutpat mauris.
                         </Text>
                    </BizagiGroup>
                </ScrollView>
                <View>
                    <Button
                        title="Datail"
                        onPress={() =>
                            navigate('DetailView', {})
                        }
                    />
                </View>
            </View>
        );
    }
}

export default FirstForm;