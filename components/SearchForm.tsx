import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                className="search-input"
                defaultValue={query}
                placeholder="Search Startups"
                name="query"
            />
            <div className="flex gap-2">
                {query && <SearchFormReset />}
                <button
                    type="submit"
                    className="size-[50px] rounded-full bg-black flex justify-center items-center text-white cursor-pointer">
                    <Search className="size-5" />
                </button>
            </div>
        </Form>
    );
};

export default SearchForm;
