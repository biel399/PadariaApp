import React, { useState } from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/images/logo.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.title2}>Promoção do dia</Text>

      <View style={styles.promo}>
        <Image
          source={require('../../assets/images/coxinha.jpg')}
          style={styles.promoImage}
        />
        <View style={styles.promoText}>
          <Text>Coxinha</Text>
          <Text>Preço: R$10,00</Text>
        </View>
      </View>

      <View style={styles.spacer}>
        <Button
          title="Ver Produtos"
          onPress={() => navigation.navigate('Ver Produtos')}
        />
      </View>
      <Button
        title="Fazer Pedido"
        onPress={() => navigation.navigate('Fazer Pedido')}
      />
    </ScrollView>
  );
}


function VerProdutosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Lista de Produtos</Text>
      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Lata Coca-Cola 350 ml</Text>
          <Text>Preço: R$10,00</Text>
        </View>
        <Image source={require('../../assets/images/coca_cola.png')} style={styles.productImage} />
      </View>
      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Mini Pizza (unidade)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/mini_pizza.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Água com gás </Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/agua_com_gas.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Água sem gás</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/agua_sem_gas.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Bolo de Chocolate (pedaço)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/bolo_de_chocolate.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Coxinha com Catupiry</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/coxinha.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Croissant de Frango</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/croissant.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Donuts de chocolate (unidade)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/donuts.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Empadão (pedaço)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/empadao.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Esfiha de Carne (unidade)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/esfiha_carne.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Pão de Queijo (unidade)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/pao_de_queijo.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Pão Frances (unidade)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/pao_frances.jpg')} style={styles.productImage} />
      </View>


      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Pastel de Carne</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/pastel.jpg')} style={styles.productImage} />
      </View>

      <View style={styles.product}>
        <View style={styles.productInfo}>
          <Text>Torta de Frutas (Pedaço)</Text>
          <Text>Preço: R$15,00</Text>
        </View>
        <Image source={require('../../assets/images/torta_de_fruta.jpg')} style={styles.productImage} />
      </View>
    </ScrollView>
  );
}

function FazerPedidoScreen() {
  const produtos = [
    { id: 1, nome: 'Água com Gás', preco: 10, imagem: require('../../assets/images/agua_com_gas.jpg') },
    { id: 2, nome: 'Água sem Gás', preco: 15, imagem: require('../../assets/images/agua_sem_gas.jpg') },
    { id: 3, nome: 'Bolo de Chocolate (pedaço)', preco: 12, imagem: require('../../assets/images/bolo_de_chocolate.jpg') },
    { id: 4, nome: 'Lata Coca-Cola 350 ml', preco: 20, imagem: require('../../assets/images/coca_cola.png') },
    { id: 5, nome: 'Coxinha com Catupiry', preco: 13, imagem: require('../../assets/images/coxinha.jpg') },
    { id: 6, nome: 'Croissant', preco: 18, imagem: require('../../assets/images/croissant.jpg') },
    { id: 7, nome: 'Donuts', preco: 17, imagem: require('../../assets/images/donuts.jpg') },
    { id: 8, nome: 'Empadão (pedaço)', preco: 14, imagem: require('../../assets/images/empadao.jpg') },
    { id: 9, nome: 'Esfiha de Carne (unidade)', preco: 16, imagem: require('../../assets/images/esfiha_carne.jpg') },
    { id: 10, nome: 'Mini Pizza (unidade)', preco: 15, imagem: require('../../assets/images/mini_pizza.jpg') },
    { id: 11, nome: 'Pão de Queijo (unidade)', preco: 11, imagem: require('../../assets/images/pao_de_queijo.jpg') },
    { id: 12, nome: 'Pão Frances (unidade)', preco: 14, imagem: require('../../assets/images/pao_frances.jpg') },
    { id: 13, nome: 'Pastel de Carne', preco: 15, imagem: require('../../assets/images/pastel.jpg') },
    { id: 14, nome: 'Suco DelValle', preco: 10, imagem: require('../../assets/images/suco.jpg') },
  ];

  const [quantidades, setQuantidades] = useState(
    produtos.reduce((acc, produto) => {
      acc[`quantidade${produto.id}`] = 0;
      return acc;
    }, {})
  );
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);

  const alterarQuantidade = (produtoId, tipo) => {
    setQuantidades((prevQuantidades) => {
      const produtoKey = `quantidade${produtoId}`;
      const novaQuantidade = tipo === 'aumentar' 
        ? Math.min(prevQuantidades[produtoKey] + 1, 10) 
        : Math.max(prevQuantidades[produtoKey] - 1, 0);
      return { ...prevQuantidades, [produtoKey]: novaQuantidade };
    });
  };

  const calcularTotal = () => {
    return produtos.reduce((total, produto) => {
      const produtoKey = `quantidade${produto.id}`;
      return total + quantidades[produtoKey] * produto.preco;
    }, 0);
  };

  const finalizarPedido = () => {
    const produtosComQuantidade = produtos.filter((produto) => quantidades[`quantidade${produto.id}`] > 0)
      .map((produto) => ({
        nome: produto.nome,
        quantidade: quantidades[`quantidade${produto.id}`],
        preco: produto.preco,
        total: quantidades[`quantidade${produto.id}`] * produto.preco,
      }));
    setProdutosSelecionados(produtosComQuantidade);
    setPedidoFinalizado(true);
  };

  const resetarPedido = () => {
    setQuantidades(
      produtos.reduce((acc, produto) => {
        acc[`quantidade${produto.id}`] = 0;
        return acc;
      }, {})
    );
    setProdutosSelecionados([]);
    setPedidoFinalizado(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Fazer Pedido</Text>
      {produtos.map((produto) => (
        <View style={styles.product} key={produto.id}>
          <View style={styles.productInfo}>
            <Text>{produto.nome}</Text>
            <Text>{`Preço: R$${produto.preco},00`}</Text>
            <Text>{`Quantidade: ${quantidades[`quantidade${produto.id}`]}`}</Text>
            <View style={styles.buttonStyle}>
              <Button title="-" onPress={() => alterarQuantidade(produto.id, 'diminuir')} />
            </View>
            <Button title="+" onPress={() => alterarQuantidade(produto.id, 'aumentar')} />
          </View>
          <Image source={produto.imagem} style={styles.productImage} />
        </View>
      ))}

      {!pedidoFinalizado ? (
        <Button title="Finalizar Pedido" onPress={finalizarPedido} />
      ) : (
        <View>
          <Text style={styles.finalizado}>Produtos Selecionados:</Text>
          {produtosSelecionados.map((produto, index) => (
            <Text key={index}>
              {produto.quantidade}x {produto.nome} - R${produto.total},00
            </Text>
          ))}
          <Text style={styles.finalizado}>Valor Total: R${calcularTotal()},00</Text>
          <Text style={styles.finalizado}>Dirija-se ao caixa para pagar.</Text>
          {/* Botão para resetar o pedido */}
          <Button title="Comprar Novamente" onPress={resetarPedido} />
        </View>
      )}
    </ScrollView>
  );
}

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Ver Produtos" component={VerProdutosScreen} />
      <Tab.Screen name="Fazer Pedido" component={FazerPedidoScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 430,
    height: 200,
    marginBottom: 20,
  },
  title2:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  promoText: {
    marginVertical: 10,
    alignItems: 'center',
  },
  promoImage: {
    width: 120,
    height: 120,
  },
  product: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10,
    justifyContent: 'space-between', 
  },
  spacer: {
    height: 50,
  },
  buttonStyle: {
    marginBottom: 10,
  },
  finalizado: {
    height: 20,
  },

  productInfo: {
    flex: 1, 
    marginRight: 10, 
  },
  productImage: {
    width: 100,
    height: 100,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button:{
    marginBottom: 20,
  },
  summary: {
    marginTop: 20,
  },
});
