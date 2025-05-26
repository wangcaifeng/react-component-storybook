import React, { useEffect, useState } from 'react'
import { Input, message } from 'antd'
import {
  FolderOpenOutlined,
  DeleteOutlined,
  PlusOutlined
} from '@ant-design/icons'
import UploadModule from './UploadBase64.module.scss'

export default function Upload({
  value,
  changeImageUrl,
  disabled
}: {
  value: string
  changeImageUrl: (src: string) => void
  disabled?: boolean
}) {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    setImageSrc(value)
  }, [value])

  useEffect(() => {
    if (imageSrc !== value) {
      changeImageUrl(imageSrc)
    }
  }, [imageSrc])
  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArr = e.target.files
    const maxFileSize = 50 * 1024
    if (!filesArr) {
      setImageSrc('')
      return
    }
    if (filesArr[0].size > maxFileSize) {
      void message.error('请上传小于50kb的文件')
      setImageSrc('')
      return
    }
    const oFReader = new FileReader()
    console.log('filesArr[0]', filesArr[0].size)
    oFReader.readAsDataURL(filesArr[0])
    oFReader.onloadend = (oFRevent) => {
      const src = oFRevent.target?.result
      setImageSrc((src as string) || '')
    }
  }
  return (
    <div
      className={`p-1 border-gray-200 border border-solid ${
        imageSrc
          ? UploadModule['upload-image-wrapper']
          : UploadModule['empty-upload-image-wrapper']
      }`}
    >
      <div
        className={`${UploadModule['upload-image-content']} ${
          !imageSrc ? UploadModule['empty-upload-image-content'] : ''
        }`}
      >
        <div
          className={UploadModule['image-holder']}
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundImage: `url("${imageSrc}")`,
            backgroundRepeat: ' no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
        {!disabled ? (
          imageSrc ? (
            <div
              className={
                UploadModule['upload-image-handle'] +
                ' ' +
                UploadModule['upload-image-handle-w']
              }
            >
              <div className="flex">
                <div className="flex-1 relative flex justify-center">
                  <Input
                    className={
                      UploadModule['input-file'] +
                      ' opacity-0 border-0 cursor-pointer'
                    }
                    onChange={(data) => {
                      getFile(data)
                    }}
                    type="file"
                    accept="image/*"
                  />
                  <FolderOpenOutlined />
                </div>
                <div className="flex-1 relative flex justify-center">
                  <DeleteOutlined
                    onClick={() => {
                      setImageSrc('')
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className={UploadModule['upload-empty-image-handle']}>
              <Input
                className={UploadModule['input-file']}
                onChange={(data) => {
                  getFile(data)
                }}
                type="file"
                accept="image/*"
              />
              <PlusOutlined />
            </div>
          )
        ) : null}

        <div className={UploadModule['upload-image-mask']} />
      </div>
    </div>
  )
}
