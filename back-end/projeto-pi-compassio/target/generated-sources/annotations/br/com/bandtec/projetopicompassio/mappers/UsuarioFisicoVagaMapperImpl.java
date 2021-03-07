package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.UsuarioFisico;
import br.com.bandtec.projetopicompassio.dominios.UsuarioFisicoVaga;
import br.com.bandtec.projetopicompassio.dto.UsuarioFisicoDTO;
import br.com.bandtec.projetopicompassio.dto.VoluntarioInscritoDTO;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-03-07T14:15:08-0300",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.6 (Oracle Corporation)"
)
@Component
public class UsuarioFisicoVagaMapperImpl implements UsuarioFisicoVagaMapper {

    @Override
    public UsuarioFisicoVaga toUsuarioFisicoVaga(VoluntarioInscritoDTO voluntarioInscritoDTO) {
        if ( voluntarioInscritoDTO == null ) {
            return null;
        }

        UsuarioFisicoVaga usuarioFisicoVaga = new UsuarioFisicoVaga();

        usuarioFisicoVaga.setFkUsuarioFisico( usuarioFisicoDTOToUsuarioFisico( voluntarioInscritoDTO.getVoluntario() ) );
        usuarioFisicoVaga.setDataInscricao( voluntarioInscritoDTO.getDataInscricao() );

        return usuarioFisicoVaga;
    }

    @Override
    public VoluntarioInscritoDTO toVoluntarioInscritoDTO(UsuarioFisicoVaga usuarioFisicoVaga) {
        if ( usuarioFisicoVaga == null ) {
            return null;
        }

        VoluntarioInscritoDTO voluntarioInscritoDTO = new VoluntarioInscritoDTO();

        voluntarioInscritoDTO.setVoluntario( usuarioFisicoToUsuarioFisicoDTO( usuarioFisicoVaga.getFkUsuarioFisico() ) );
        voluntarioInscritoDTO.setDataInscricao( usuarioFisicoVaga.getDataInscricao() );

        return voluntarioInscritoDTO;
    }

    protected UsuarioFisico usuarioFisicoDTOToUsuarioFisico(UsuarioFisicoDTO usuarioFisicoDTO) {
        if ( usuarioFisicoDTO == null ) {
            return null;
        }

        UsuarioFisico usuarioFisico = new UsuarioFisico();

        usuarioFisico.setEmail( usuarioFisicoDTO.getEmail() );
        usuarioFisico.setNome( usuarioFisicoDTO.getNome() );
        usuarioFisico.setDataNascimento( usuarioFisicoDTO.getDataNascimento() );

        return usuarioFisico;
    }

    protected UsuarioFisicoDTO usuarioFisicoToUsuarioFisicoDTO(UsuarioFisico usuarioFisico) {
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
