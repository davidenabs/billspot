"use client";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import useNavigate from "@/utils/navigation";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Modal, Text } from "rizzui";

export default function LoginPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigateTo } = useNavigate();

  return (
    <section>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="">
        <div className="bg-white rounded-2xl w-full m-0 p-8 py-12 ">
          <div className="flex items-center gap- justify-between">
            <Text className="text-xl md:text-3xl  font-bold text-zinc-800">
              Terms and Conditions
            </Text>
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-100 p-2 md:p-4 rounded-full"
              >
                <XMarkIcon className="w-4 md:w-7"></XMarkIcon>
              </button>
            </div>
          </div>

          <div className="max-h-[515px] mt-5 overflow-y-scroll">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            tempore quidem corporis aspernatur excepturi impedit eaque iste
            soluta ipsa sit facilis deleniti officia quibusdam placeat
            accusantium ratione nemo harum maiores eos, distinctio totam, quia
            mollitia maxime nobis. Saepe aspernatur velit repudiandae magnam
            libero atque numquam iste officiis neque repellat! Maxime quam animi
            doloremque labore consequatur unde autem nemo natus temporibus
            deleniti quae tenetur adipisci explicabo officiis ipsum aut deserunt
            corporis ab ea, cumque, quaerat non reprehenderit? Impedit sapiente
            tempora culpa pariatur. Eius ipsam fugiat quos architecto assumenda
            explicabo consectetur earum, facilis sint dolorum, porro delectus
            beatae? Cumque facere recusandae reprehenderit. Fugit maxime eveniet
            repudiandae consequatur veniam. In alias temporibus aliquam sunt
            officiis ab iure illum exercitationem labore. At reiciendis
            molestias fuga, odit quaerat eligendi voluptate perferendis aliquam
            officia nihil quibusdam vero necessitatibus id asperiores tenetur
            fugiat, deleniti fugit voluptatum non accusantium ad laudantium.
            Sed, voluptas commodi quis odit optio corrupti dolore facere eveniet
            voluptatum ipsum consequuntur reiciendis enim quia a nostrum officia
            quae deleniti expedita labore repellendus rerum. Eligendi, minus,
            qui beatae nostrum unde, quae modi temporibus eum error officiis
            maxime natus dignissimos commodi? Incidunt vitae sit odio molestiae
            modi nobis velit id reiciendis ducimus repellat temporibus, amet
            accusantium voluptatum soluta natus? Tempora, sit, eveniet odit
            fugit ratione optio reiciendis blanditiis soluta numquam similique
            ut quidem quisquam omnis dolor dicta hic nemo incidunt vitae
            perferendis pariatur inventore tenetur saepe debitis! Aliquam id
            obcaecati amet dolor laudantium. Blanditiis facere itaque iste
            sapiente! Provident animi nisi ad non omnis quia praesentium numquam
            nemo veritatis ipsa assumenda id magnam adipisci eius dignissimos,
            eos repellendus totam ipsam voluptatibus odio enim et est. Maxime
            voluptas ut placeat quidem sapiente aut expedita repudiandae iste,
            temporibus vero, odio, praesentium corporis aliquid voluptatibus
            ipsam. Ipsa inventore minus quaerat, earum suscipit cumque optio
            harum mollitia ad officiis nam omnis distinctio odio aut iusto fugit
            architecto, culpa neque, quam ratione cupiditate impedit magnam.
            Error autem tenetur provident cumque soluta quidem at corporis
            dolor, labore enim harum voluptate quisquam illo laudantium velit
            atque beatae culpa amet explicabo inventore necessitatibus nam.
            Debitis qui iusto pariatur beatae magni laboriosam quasi quo. Quasi
            sint dolores, quisquam ut praesentium nihil alias nisi eaque
            voluptatem sequi quaerat cumque molestias, ratione doloremque
            deleniti ab veniam illo inventore unde doloribus modi quod.
            Excepturi culpa eos enim obcaecati inventore, illo incidunt numquam
            iste doloribus dignissimos facilis, vitae consectetur! Tempora,
            adipisci. Blanditiis iste esse earum quo voluptatibus rerum
            consequuntur placeat tempore maiores exercitationem quisquam sunt
            neque molestiae, sint aut porro doloribus quasi laboriosam, suscipit
            minima deserunt facere cumque totam. Ipsa, nesciunt quia cupiditate
            quos neque officia dolorem! Excepturi nesciunt autem, accusamus
            voluptas voluptatibus accusantium hic nemo pariatur velit quibusdam.
            Nesciunt totam rem voluptas tempora incidunt iste libero vitae odit,
            cum officia dolorem obcaecati, commodi perferendis, voluptates autem
            qui atque. Quis, impedit nemo? Sapiente a recusandae fugit nulla qui
            eaque consequuntur natus consectetur, hic sequi cumque nesciunt
            inventore quaerat perspiciatis nisi dolorem sed repellendus placeat
            facere in amet expedita ex! Magnam maxime aperiam adipisci hic
            similique iste odit quo aliquam molestias?
          </div>

          <Button
            className="rounded-[12px] w-full h-[52px] !mt-[32px]"
            onClick={() => {
              navigateTo("/login");
            }}
          >
            <span className="font-bold text-xl">Agree and continue</span>
          </Button>
        </div>
      </Modal>
      <div className="space-y-10">
        <Image
          src={"/images/billspot-logo.png"}
          width={100}
          height={100}
          alt="Billspot"
        />

        <div className="w-full">
          <Text className=" text-3xl font-bold text-zinc-800">
            Create account
          </Text>
          <Text className="mt-2 w-full text-sm md:text-xl text-zinc-500">
            Enter your details to create an account
          </Text>
        </div>
        <form className="!mt-24 hidde">
          <div className="xl:w-[500px] w-full h-[178px] space-y-4">
            <Input
              label="Username"
              placeholder="Paschal Nwez|"
              type="text"
              className="my-4"
            />

            <Input
              label="Email address"
              placeholder="name@mail.com"
              type="email"
              className="my-4"
            />

            <Input
              label="Phone number"
              placeholder="Paschal Nwez|"
              type="text"
              className="my-4"
            />

            <Input
              label="Password"
              placeholder="*******"
              type="password"
              className="my-4"
            />

            <Button
              className="rounded-[12px] w-full h-[52px] !mt-[32px]"
              onClick={undefined}
            >
              <span className="font-bold text-xl">Create Account</span>
            </Button>

            <div className="text-center text-base font-instrumentSans text-[#1d1d1d]">
              <span>Already have an account? </span>
              <Link href="/login" className="font-medium text-bs-violet">
                Login
              </Link>
            </div>

            <div className="text-center text-base font-instrumentSans text-[#1d1d1d] pt-5">
              Bly clicking on “create account”, <br />
              you have agreed to our
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="font-medium text-green-400 underline pl-1 cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
