import React from 'react';
import logo from './a.png';
import './App.css';
import { Header, Image, Table, Modal, Button, Icon } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Header as='h2' className="header">
        <Image className="header-image" circular src={logo} />
        <div className="header-name">Adi Fikri Store</div>
      </Header>

      <div className="wrapper-data">
        <Table celled selectable>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nama</Table.HeaderCell>
              <Table.HeaderCell>Pesanan</Table.HeaderCell>
              <Table.HeaderCell>Rubah Pesanan</Table.HeaderCell>
              <Table.HeaderCell>Hapus Pesanan</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Adi Fikri</Table.Cell>
              <Table.Cell>Buku</Table.Cell>

              <Table.Cell>
                <Modal trigger={<Button color='green'><Icon name='edit' />Rubah</Button>} closeIcon>
                  <Header icon='archive' content='Rubah Data' />
                  <Modal.Content>
                    <p>
                      Apakah anda ingin merubah data ?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red'>
                      <Icon name='remove' /> Batal
                        </Button>
                          <Button color='green'>
                            <Icon name='checkmark' /> Simpan
                        </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>

              <Table.Cell>
                <Modal trigger={<Button color='red'><Icon name='trash' />Hapus</Button>} closeIcon>
                  <Header icon='archive' content='Hapus Data' />
                  <Modal.Content>
                    <p>
                      Apakah anda ingin menghapus data ?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red'>
                      <Icon name='remove' /> Batal
                        </Button>
                          <Button color='green'>
                            <Icon name='checkmark' /> Simpan
                        </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>

            </Table.Row>

            <Table.Row>
              <Table.Cell>Fikri Adi</Table.Cell>
              <Table.Cell>Pensil</Table.Cell>

              <Table.Cell>
                <Modal trigger={<Button color='green'><Icon name='edit' />Rubah</Button>} closeIcon>
                  <Header icon='archive' content='Rubah Data' />
                  <Modal.Content>
                    <p>
                      Apakah anda ingin merubah data ?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red'>
                      <Icon name='remove' /> Batal
                        </Button>
                          <Button color='green'>
                            <Icon name='checkmark' /> Simpan
                        </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>

              <Table.Cell>
                <Modal trigger={<Button color='red'><Icon name='trash' />Hapus</Button>} closeIcon>
                  <Header icon='archive' content='Hapus Data' />
                  <Modal.Content>
                    <p>
                      Apakah anda ingin menghapus data ?
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red'>
                      <Icon name='remove' /> Batal
                        </Button>
                          <Button color='green'>
                            <Icon name='checkmark' /> Simpan
                        </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>

            </Table.Row>

          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default App;
