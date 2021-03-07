package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dto.UsuarioFisicoDTO;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-03-07T12:50:30-0300",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.6 (Oracle Corporation)"
)
@Component
public class UsuarioFisicoMapperImpl implements UsuarioFisicoMapper {

    @Override
    public UsuarioFisico toUsuarioFisico(UsuarioFisicoDTO usuarioFisicoDTO) {
        if ( usuarioFisicoDTO == null ) {
            return null;
        }

        UsuarioFisico usuarioFisico = new UsuarioFisico();

        usuarioFisico.setEmail( usuarioFisicoDTO.getEmail() );
        usuarioFisico.setNome( usuarioFisicoDTO.getNome() );
        usuarioFisico.setDataNascimento( usuarioFisicoDTO.getDataNascimento() );

        return usuarioFisico;
    }

    @Override
    public UsuarioFisicoDTO toUsuarioFisicoDTO(UsuarioFisico usuarioFisico) {
        if ( usuarioFisico == null ) {
            return null;
        }

        UsuarioFisicoDTO usuarioFisicoDTO = new UsuarioFisicoDTO();

        usuarioFisicoDTO.setNome( usuarioFisico.getNome() );
        usuarioFisicoDTO.setEmail( usuarioFisico.getEmail() );
        usuarioFisicoDTO.setDataNascimento( usuarioFisico.getDataNascimento() );

        return usuarioFisicoDTO;
    }
}
