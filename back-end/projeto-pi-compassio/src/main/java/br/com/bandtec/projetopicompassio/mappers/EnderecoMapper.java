package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.Endereco;
import br.com.bandtec.projetopicompassio.dto.EnderecoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EnderecoMapper {

    Endereco toEndereco(EnderecoDTO enderecoDTO);
    EnderecoDTO toEnderecoDTO(Endereco endereco);
}
