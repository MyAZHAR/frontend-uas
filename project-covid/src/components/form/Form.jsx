import React, { useState } from 'react'; 
import provincesData from '../../utils/constants/provinces.js';
import { 
  Container, 
  TableContainer, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td, 
  FormContainer, 
  Image, 
  FormWrapper, 
  Select, 
  Input, 
  Button, 
  ButtonContainer, 
  Heading, 
  Subheading 
} from './Form.styled';

function Form() {
  const [provinces, setProvinces] = useState(provincesData.provinces);
  const [formData, setFormData] = useState({
    provinsi: '',
    status: 'Pilih status',
    jumlah: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { provinsi, status, jumlah } = formData;

    const newCases = parseInt(jumlah);

    const updatedProvinces = provinces.map((province) => {
      if (province.kota === provinsi) {
        if (status.toLowerCase() === 'positif' && isNaN(province.positif)) {
          return {
            ...province,
            positif: newCases,
          };
        } else {
          return {
            ...province,
            [status.toLowerCase()]: province[status.toLowerCase()] + newCases,
          };
        }
      }
      return province;
    });

    setProvinces(updatedProvinces);

    setFormData({
      ...formData,
      jumlah: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <Heading>Provinsi</Heading>
      <Subheading>Data Covid Berdasarkan Provinsi Di Indonesia</Subheading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Provinsi</Th>
              <Th>Positif</Th>
              <Th>Sembuh</Th>
              <Th>Meninggal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {provinces.map((province, index) => (
              <Tr key={index}>
                <Td>{province.kota}</Td>
                <Td>{province.positif || 0}</Td>
                <Td>{province.sembuh}</Td>
                <Td>{province.meninggal}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <FormContainer>
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b23ef7526107a2dc1aa77109a3ef69ad680f2eda207b9fe6bf225999dab3e5f?"
          alt="Placeholder image"
        />
        <FormWrapper>
          <Heading>Form Covid 19</Heading>
          <form onSubmit={handleSubmit}>
            <label htmlFor="provinsi">Provinsi:</label>
            <Select
              id="provinsi"
              name="provinsi"
              value={formData.provinsi}
              onChange={handleChange}
              required
              title="Pilih salah satu dari data provinsi"
            >
              <option value="">Pilih Provinsi</option>
              {provinces.map((province, index) => (
                <option key={index} value={province.kota}>
                  {province.kota}
                </option>
              ))}
            </Select>

            <label htmlFor="status">Status:</label>
            <Select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Pilih status</option>
              <option value="Positif">Positif</option>
              <option value="Sembuh">Sembuh</option>
              <option value="Meninggal">Meninggal</option>
            </Select>

            <label htmlFor="jumlah">Jumlah:</label>
            <Input
              type="number"
              id="jumlah"
              name="jumlah"
              value={formData.jumlah}
              onChange={handleChange}
              required 
              placeholder="Masukkan Jumlah" 
            />

            <ButtonContainer>
              <Button type="Submit">Submit</Button>
            </ButtonContainer>
          </form>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
}

export default Form;
