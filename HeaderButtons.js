import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
            marginHorizontal: 10
        }}
            onPress={props.onpress}>
            <Icon name='refresh' size={25} color="#F5D97E"/>
        </TouchableOpacity>
    );
}

export default HeaderButton