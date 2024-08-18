"use client";
import Select from 'react-select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import usePokemonOptions from '../custom_component/sample/hooks/useSampleCard';

const Home: React.FC = () => {
  const { pokemonOptionList, isLoading, loadOptions } = usePokemonOptions();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>샘플 작성</CardTitle>
        <CardDescription>테스트용 샘플 작성 컴포넌트</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="제목" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pokedex">Pokedex</Label>
              <Select
                id="pokedex"
                isClearable
                isLoading={isLoading}
                onInputChange={loadOptions}
                options={pokemonOptionList}
                placeholder="도감번호"
                styles={{ menu: (provided) => ({ ...provided, zIndex: 9999 }) }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="content">Content</Label>
              <Textarea className="h-80 resize-none" placeholder="내용" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>작성</Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
