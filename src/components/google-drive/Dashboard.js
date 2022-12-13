import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import { useFolder } from '../../hooks/useFolder'
import AddFileButton from './AddFileButton'
import AddFolderButton from './AddFolderButton'
import File from './File'
import Folder from './Folder'
import FolderBreadcrumbs from './FolderBreadcrumbs'
import Navbar from './Navbar'


export default function Dashboard() {
  const { folderId } = useParams()
  const { state = {} } = useLocation()
  const { folder, childFolders, childFiles } = useFolder(folderId, state.folder);

  // console.log(childFiles, childFolders)

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className='d-flex align-items-center bg-dark pl-2 pr-2 mt-3 w-100'>
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFolders.map(childFolder => (
              <div
                key={childFolder.id}
                style={{ maxWidth: '250px' }}
                className='p-2'>
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}

        {childFolders.length > 0 && childFiles.length > 0 && <hr />}

        {childFiles.length > 0 && (
          <div className='d-flex flex-wrap'>
            {childFiles.map(childFile => (
              <div
                key={childFile.id}
                style={{ maxWidth: '250px' }}
                className='p-2'>
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

