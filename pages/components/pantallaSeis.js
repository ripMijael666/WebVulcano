import Image from 'next/image'
import imagenLogo from "../../public/logo_azul.png"

export default function pantallaSeis() {
    return (
        <div
            className="w-screen h-screen flex flex-row"
        >
            <div
                className="w-1/5 flex flex-col bg-[#FCFDFE]"
            >
                <div
                    className="w-full h-1/5 bg-[#FCFDFE]"
                >
                    <div
                        className="w-full h-full flex flex-row justify-center items-end pb-10"
                    >
                        <Image
                            src={imagenLogo}
                            layout='fixed'
                        />
                    </div>

                </div>
                <div
                    className="h-4/5 flex flex-col justify-center items-center"
                >
                    <div
                        className="bg-[#F6F6FA] w-[100px] h-[100px] my-6 rounded-3xl text-[10px] flex flex-row justify-center items-center pb-3"
                    >
                        Nuevo Orden
                    </div>
                    <div
                        className="bg-[#F6F6FA] w-[100px] h-[100px] my-6 rounded-3xl text-[10px] flex flex-row justify-center items-center pb-3"
                    >
                        Citas
                    </div>
                    <div
                        className="bg-[#F6F6FA] w-[100px] h-[100px] my-6 rounded-3xl  text-[10px] flex flex-row justify-center items-center pb-3"
                    >
                        Asignas SR's
                    </div>
                </div>

            </div>
            <div
                className="w-4/5 bg-[#F6F6FA] "
            >
                <div
                    className="flex flex-row"
                >
                    <div
                        className="h-full top-35 text-[28px] font-semibold flex-1 pt-10 pl-10"
                    >
                        Dashoard
                    </div>

                    <div
                        className="flex-1 pl-[44vw] flex flex-row"
                    >
                        <div
                            className='pt-10'
                        >
                            <p
                                className='font-semibold pl-[30px]'
                            >
                                Juan Camacho
                            </p>
                            <p
                                className='font-semibold text-[#B4BCC4] text-[14px]'
                            >
                                ASESOR DE SERVICIO
                            </p>
                        </div>
                        <div
                            class="rounded-full w-[75px] h-[75px] bg-[#E4E7EB] ml-5 pt-10"
                        >

                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-row"
                >
                    <div
                        className="flex flex-col pl-10 "
                    >
                        <div
                            className="bg-[#3682F7] w-[240px] h-[100px] my-6 rounded-lg text-[10px] justify-center flex"
                        >
                            <div
                                className='justify-center items-center'
                            >
                                <p
                                    className='text-[#FFFFFF] text-[42px] font-black pl-14'
                                >
                                    234344
                                </p>

                                <p
                                    className='text-[#FFFFFF] text-[15px] font-thin mr-8    '
                                >
                                    ORDENES ENTREGADAS
                                </p>
                            </div>
                        </div>

                        <div
                            className="bg-[#3682F7] w-[240px] h-[100px] my-6 rounded-lg text-[10px] justify-center flex  mt-[-8px]"
                        >
                            <div
                                className='justify-center items-center'
                            >
                                <p
                                    className='text-[#FFFFFF] text-[42px] font-black pl-14'
                                >
                                    234344
                                </p>

                                <p
                                    className='text-[#FFFFFF] text-[15px] font-thin mr-8    '
                                >
                                    ORDENES ENTREGADAS
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-[#3682F7] w-[240px] h-[100px] my-6 rounded-lg text-[10px] justify-center flex  mt-[-8px]"
                        >
                            <div
                                className='justify-center items-center'
                            >
                                <p
                                    className='text-[#FFFFFF] text-[42px] font-black pl-14'
                                >
                                    234344
                                </p>

                                <p
                                    className='text-[#FFFFFF] text-[15px] font-thin mr-8    '
                                >
                                    ORDENES ENTREGADAS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='text-[18px] text-[#000000]'
                    >
                        <p
                            className='text-[18] font-light pl-[2vw] mt-5'
                        >
                            Última OT's
                        </p>
                    </div>

                    <div
                        className='text-[18px] text-[#000000]'
                    >
                        <p
                            className='text-[18] font-light pl-[15vw] mt-5'
                        >
                            Marcas más ingresadas
                        </p>
                    </div>

                    <div
                        className='text-[18px] text-[#000000]'
                    >
                        <p
                            className='text-[18] font-light pl-[13vw] mt-5'
                        >
                            Ingresos a lo largo del tiempo

                        </p>
                    </div>
                </div>

                <div
                    className='flex flex-col'
                >
                    <div
                        className='flex pl-10'
                    >
                        <p
                            className='text-[18px] text-[#000000]'
                        >
                            OT's en curso
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
