import { TipoDocumento } from "../enumeracoes/tipoDocumento"
import { TipoTelefone } from "../enumeracoes/tipoTelefone"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"

let cliente = new Cliente()
cliente.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`
cliente.nomeSocial = `Dom Pedro II`
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)
let endereco = new Endereco()
endereco.rua = `R. do Catete`
endereco.bairro = `Copacabana`
endereco.cidade = `Rio de Janeiro`
endereco.estado = `Rio de Janeiro`
endereco.pais = `Brasil`
endereco.codigoPostal = `22220-000`
cliente.endereco = endereco
let cel = new Telefone() 
cel.tipo = TipoTelefone.Cel
cel.ddd = "21"
cel.numero = "987654321"
let tel = new Telefone() 
tel.tipo = TipoTelefone.Tel1
tel.ddd = "12"
tel.numero = "123456789"
cliente.telefones.push(cel, tel)
let rg = new Documento()
rg.numero = "123456789-00"
rg.tipo = TipoDocumento.RG
rg.dataExpedicao = new Date(1822, 9, 7)
let cpf = new Documento()
cpf.numero = "123456789-00"
cpf.tipo = TipoDocumento.CPF
cpf.dataExpedicao = new Date(1900, 10, 15)
let passaporte = new Documento()
passaporte.numero = "p123456789"
passaporte.tipo = TipoDocumento.Passaporte
passaporte.dataExpedicao = new Date(1910, 1, 15)
cliente.documentos.push(rg, cpf, passaporte) 


let dependente = new Cliente()
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`
dependente.nomeSocial = `Princesa Isabel`
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = (cliente.endereco.clonar() as Endereco)
dependente.telefones = cliente.telefones.map(t => t.clonar() as Telefone)
let rgDependente = new Documento()
rgDependente.tipo = TipoDocumento.RG
rgDependente.numero = "12233123"
rgDependente.dataExpedicao = new Date(1900, 12, 12)
dependente.documentos.push(rgDependente)
dependente.titular = cliente
cliente.dependentes.push(dependente)

console.log(cliente)
console.log(dependente)
