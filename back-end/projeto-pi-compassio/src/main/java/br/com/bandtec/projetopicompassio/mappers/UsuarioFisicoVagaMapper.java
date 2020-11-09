package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsuarioFisicoVagaMapper {

    @Mapping(source = "voluntario", target = "fkUsuarioFisico")
    UsuarioFisicoVaga toUsuarioFisicoVaga(VoluntarioInscritoDTO voluntarioInscritoDTO);

    @InheritInverseConfiguration
    VoluntarioInscritoDTO toVoluntarioInscritoDTO(UsuarioFisicoVaga usuarioFisicoVaga);
}
