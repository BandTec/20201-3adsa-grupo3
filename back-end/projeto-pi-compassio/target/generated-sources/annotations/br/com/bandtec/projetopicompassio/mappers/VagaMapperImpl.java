package br.com.bandtec.projetopicompassio.mappers;

import br.com.bandtec.projetopicompassio.dominios.Vaga;
import br.com.bandtec.projetopicompassio.dto.VagaDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-03-07T14:15:09-0300",
    comments = "version: 1.3.1.Final, compiler: javac, environment: Java 11.0.6 (Oracle Corporation)"
)
@Component
public class VagaMapperImpl implements VagaMapper {

    @Override
    public Vaga toVaga(VagaDTO vagaDTO) {
        if ( vagaDTO == null ) {
            return null;
        }

        Vaga vaga = new Vaga();

        vaga.setTitulo( vagaDTO.getTitulo() );
        vaga.setDescricao( vagaDTO.getDescricao() );
        vaga.setCausa( vagaDTO.getCausa() );
        vaga.setDataInicio( vagaDTO.getDataInicio() );
        vaga.setDataFim( vagaDTO.getDataFim() );

        return vaga;
    }

    @Override
    public VagaDTO toVagaDTO(Vaga vaga) {
        if ( vaga == null ) {
            return null;
        }

        VagaDTO vagaDTO = new VagaDTO();

        vagaDTO.setTitulo( vaga.getTitulo() );
        vagaDTO.setDataInicio( vaga.getDataInicio() );
        vagaDTO.setDataFim( vaga.getDataFim() );
        vagaDTO.setCausa( vaga.getCausa() );
        vagaDTO.setDescricao( vaga.getDescricao() );

        return vagaDTO;
    }

    @Override
    public List<Vaga> toListVaga(List<VagaDTO> listVagaDTO) {
        if ( listVagaDTO == null ) {
            return null;
        }

        List<Vaga> list = new ArrayList<Vaga>( listVagaDTO.size() );
        for ( VagaDTO vagaDTO : listVagaDTO ) {
            list.add( toVaga( vagaDTO ) );
        }

        return list;
    }

    @Override
    public List<VagaDTO> toListVagaDTO(List<Vaga> listVaga) {
        if ( listVaga == null ) {
            return null;
        }

        List<VagaDTO> list = new ArrayList<VagaDTO>( listVaga.size() );
        for ( Vaga vaga : listVaga ) {
            list.add( toVagaDTO( vaga ) );
        }

        return list;
    }
}
