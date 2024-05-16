import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';
import Head from '../components/Head';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

interface Produto {
    id: number;
    nome: string;
    ingredientes: string;
    preco: number;
    imagem: string;
}

const EditarProduto: React.FC = () => {

    const [nome, SetNome] = useState<string>('');
    const [preco, SetPreco] = useState<string>('0');
    const [ingredientes, SetIngredientes] = useState<string>('');
    const [imagem, SetImagem] = useState<any>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { produto } = route.params;

        SetNome(produto.nome);
        SetPreco(produto.preco);
        SetIngredientes(produto.ingredientes);
        SetImagem(produto.imagem);
    }

    )

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <Head />
            <View style={styles.form}>
                <TextInput style={styles.input} 
                value={nome}
                onChangeText={SetNome}
                />

                <TextInput
                style={styles.input}
                value={preco}
                onChangeText={SetPreco}
                keyboardType="numeric"/>

                <TextInput
                style={styles.input}
                value={ingredientes}
                onChangeText={SetIngredientes}
                multiline
                />

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>voltar</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "red",
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    form: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    },

})

export default EditarProduto;