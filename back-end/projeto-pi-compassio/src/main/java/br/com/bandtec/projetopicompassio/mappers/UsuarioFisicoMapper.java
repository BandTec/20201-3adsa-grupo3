package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dto.UsuarioFisicoDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsuarioFisicoMapper {


    UsuarioFisico toUsuarioFisico(UsuarioFisicoDTO usuarioFisicoDTO);

    UsuarioFisicoDTO toUsuarioFisicoDTO(UsuarioFisico usuarioFisico);
}
