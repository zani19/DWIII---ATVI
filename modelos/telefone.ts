import { TipoTelefone } from "../enumeracoes/tipoTelefone"
import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo{
    public tipo: TipoTelefone
    public ddd: string
    public numero: string

    public clonar(): Prototipo{
        let telefone = new Telefone()
        telefone.ddd = this.ddd
        telefone.numero = this.numero
        return telefone
    }
}